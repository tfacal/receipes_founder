from collections import defaultdict
import scrapy
from collections import defaultdict
import re

class ReceipesSpider(scrapy.Spider):
    name = 'receipes'
    allowed_domains = ['http://recetasgratis.net/', 'recetasgratis.net']
    start_urls = ['http://recetasgratis.net/', ]

    def parse_link(self, response):
        for link in response.css('div.resultado a::attr(href)').extract():
            yield scrapy.Request(link, callback=self.parse_link2)
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

    def parse_link2(self, response):
        for link in response.css('div.header-gap'):
            yield {"nombre": link.css('article h1::text').extract(),
                   "comensales": link.css('div.properties span.comensales::text').extract(),
                   "duracion": self.parse_duration(str(link.css('div.properties span.duracion::text').extract()[0])),
                   "para": link.css('div.properties span.para::text').extract(),
                   "dificultad": link.css('div.properties span.dificultad::text').extract(),
                   "ingredientes": link.css('div.ingredientes li.ingrediente label::text').extract(),
                   "apartados": link.css('div.apartado p::text').extract()
                   } 
            print(str(link.css('div.properties span.duracion::text').extract()[0]).strip())    

    def parse(self, response):
        for link in response.css('div.categoria a::attr(href)').extract():
            yield scrapy.Request(link, callback=self.parse_link)

    