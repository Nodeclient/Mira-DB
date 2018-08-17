import requests
r = requests.post("http://localhost:8123/query", data={'user': 'root', 'pass': '', 'db': 'test','query':'select table person'})
print(r.text)