
### Express.js Connector
 ```js
    var db = new MiraDB("root","","http://localhost:8123/query","test");
            
       db.query("select table person",function(result){
              console.log(JSON.stringify( result));
       });    
```

### Socket.IO Connector
 ```js       
    var db = new MiraDB("root","","127.0.0.1:8123","test");
                
        db.Connect();

           db.Query("select table person",function(result){
                console.log(JSON.stringify( result));
           });     
```
