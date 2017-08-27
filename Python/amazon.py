# Amazon网站爬取

import requests
url = "https://www.amazon.cn/gp/product/B0747MHXYX"
try:
    kv = {'user-agent':'Mozilla/5.0'}
    r = requests.get(url,headers=kv)
    r.raise_for_status()
    print r.request.headers
    r.encoding = r.apparent_encoding
    print r.text
except:
    print "爬取失败"
