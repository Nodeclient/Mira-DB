## INSTALL plugin "requests" 
``` pip install requests ```

More Information
http://docs.python-requests.org/en/latest/user/install/#install

### Example Client
```py
  import requests
  res = requests.post("http://localhost:8123/query", data={'user': 'root', 'pass': '', 'db': 'test','query':'select table person'})
  print(res.text)
```
