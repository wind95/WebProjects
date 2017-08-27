# -*- coding: utf-8 -*-
# 京东网页爬取

import requests

url = 'https://item.jd.com/2967929.html'

def getHTMLText(url):
	try:
		r = requests.get(url,timeout=30)
		r.raise_for_status()
		r.encoding = r.apparent_encoding
		return r.text
	except:
		return "produce except"
print getHTMLText(url)
