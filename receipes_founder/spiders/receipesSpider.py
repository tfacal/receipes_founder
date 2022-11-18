from collections import defaultdict
import scrapy
from collections import defaultdict
import re

class ReceipesSpider(scrapy.Spider):
    name = 'receipes' # Nombre del Spider
    allowed_domains = ['http://recetasgratis.net/', 'recetasgratis.net'] # Webs en las que se va a buscar
    start_urls = ['http://recetasgratis.net/', ] # Url por la que se empieza a crawlear

    def parse_link(self, response):
        for link in response.css('div.resultado a::attr(href)').extract():
            yield scrapy.Request(link, callback=self.parse_link2)
            
    # Parse para convertir el string de duracion en formato 'XXh XXm' a minutos en formato 'XX'
    def parse_duration(self, s):
        d = {
            'd':      24*60,
            'day':    24*60,
            'days':   24*60,
            'h':      60,
            'hr':     60,
            'hour':   60,
            'hours':  60,
        }
        mult_items = defaultdict(lambda: 1).copy()
        mult_items.update(d)

        parts = re.search(r'^(\d+)([^\d]*)', s.lower().replace(' ', ''))
        if parts:
            return int(parts.group(1)) * mult_items[parts.group(2)] + self.parse_duration(re.sub(r'^(\d+)([^\d]*)', '', s.lower()))
        else:
            return 0

    # Se recuperan los datos de cada receta buscando por css
    def parse_link2(self, response):
        for link in response.css('div.header-gap'):
            yield {"nombre": link.css('article h1::text').extract(),
                   "comensales": link.css('div.properties span.comensales::text').extract(),
                   "duracion": str(self.parse_duration(str(link.css('div.properties span.duracion::text').extract()[0]))).zfill(4),
                   "para": link.css('div.properties span.para::text').extract(),
                   "dificultad": link.css('div.properties span.dificultad::text').extract(),
                   "ingredientes": link.css('div.ingredientes li.ingrediente label::text').extract(),
                   "apartados": link.css('div.apartado').css('p').css('*::text').getall()
                   } 
            print(str(link.css('div.properties span.duracion::text').extract()[0]).strip())    

    def parse(self, response):
        for link in response.css('div.categoria a::attr(href)').extract():
            yield scrapy.Request(link, callback=self.parse_link)

    