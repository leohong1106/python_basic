import requests
from decouple import config

chat_id = ''
text = ''
base_url = 'https://api.telegram.org'
token = config('TOKEN')

print(token)

url = f'{base_url}/bot{token}/getUpdates'

print(url)

"""
getUpdates 요청을 통해 받아온 응답에서
id를 뽑아내어 sendMessage를 통해 메시지 보내기

1. 한 사람에게만 보내기(첫번째로 메시지 보낸사람)
2. 나에게 메시지 보낸 모든 사람에게 보내기
"""

res = requests.get(url)
data = res.json()

print(len(data['result']))