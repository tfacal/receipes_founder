import scrapy


class ReceipesSpider(scrapy.Spider):
    name = 'receipes'
    allowed_domains = ['http://recetasgratis.net/', 'recetasgratis.net']
    start_urls = ['http://recetasgratis.net/', ]

    def parse_link(self, response):
        for link in response.css('div.resultado'):
            yield {"nombre": link.css('a::text').extract(),
                   "comensales": link.css('div.properties span.comensales::text').extract(),
                   "duracion": link.css('div.properties span.duracion::text').extract(),
                   "para": link.css('div.properties span.para::text').extract(),
                   "dificultad": link.css('div.info_snippet span::text').extract()
                   }

    def parse(self, response):
        for link in response.css('div.categoria a::attr(href)').extract():
            yield scrapy.Request(link, callback=self.parse_link)
