### NODE.JS Connector
install request plugin
    ``` npm i request -g ```

```js
    const MiraDB = require("./nodejs_express_connector");
        
        var db = new MiraDB("root","6","http://localhost:8123/query","test");   
            db.query("select table test",function(data,err){
                console.log(data);
            });
```


### PHP Connector

```php
<?php
    include 'miradb_php_connector.php';
        $db = new MiraDB("root","","http://localhost:8123/query","test");
             echo  $db->query("select table person");
?>
```

### DLL Connector

```c#
        //IMPORT DLL
        MIRA.database db = new MIRA.database();
        //SET CONF
        db.User = "root";
        db.Password = "";
        db.Database = "test";
        db.Server = "http://localhost:8123/query";
        //RETURN DATA
        string result = db.Query("select table person");
        Debug.Log(result);
```

### Express Connector

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
