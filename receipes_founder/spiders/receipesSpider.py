import scrapy
 
class ReceipesSpider(scrapy.Spider):
    name = 'receipes'
    allowed_domains = ['http://recetasgratis.net/',]
    start_urls = ['http://recetasgratis.net/',]

    def start_request(self, response):
      # urls = response.css('div.categoria a::attr(href)').extract()
      # for url in urls:
      url = 'http://recetasgratis.net/'
      yield scrapy.Request(url , callback=self.parse)

    # def parse_receipes(self, response):
    #     for info in response.css('div'):
    #         yield {
    #             'product_name': info.css('h2::text').extract_first(),
    #         }

    def parse(self, response):
      # content = response.css('div').extract()
      # yield {'content':content}
      for link in response.css('div.categoria a::attr(href)').extract():
        yield {'content': link}


         