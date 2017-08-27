# IP归属地查询

import requests # 导入requests库

# 变量
url = "http://ip.taobao.com/service/getIpInfo.php?ip=218.77.77.220"
header = {'user-agent':'Mozilla/5.0'}

try:
    r = requests.get(url,headers = header)# 请求
    print r.request.url,r.request.headers
    r.raise_for_status()
    r.encoding = r.apparent_encoding
    print r.text
except:
    print "爬取失败"
