# Scrapy

Na carpeta receipes_founder debemos executar

scrapy crawl receipes -o ../dataset/receipes.json

# Solr

bin/solr start

bin/solr create -c receipesData -d server/solr/configsets/receipesData_configs/conf

bin/post -c receipesData example/receipesData/receipes.json

bin/solr stop


