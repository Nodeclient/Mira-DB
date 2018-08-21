import requests
res = requests.post("http://localhost:8123/query", data={'user': 'root', 'pass': '', 'db': 'test','query':'select table person'})
print(res.text)
