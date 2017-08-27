# 百度关键字搜索

import requests

url = "http://www.baidu.com/s"
keyword = "Python"
try:
    kw = {"wd":keyword}
    r = requests.get(url,params=kw)
    print r.request.url
    r.raise_for_status()
    print len(r.text) ,r.text
except:
    print "爬取失败"
