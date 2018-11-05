#  SourceCode 

### [JAVA][41]
CONNECTOR : [mira_db_connector.jar][4]
```java
    /*Client Examples*/
    import  org.mira.database.db;
	     db Conn = new db();
	   	   Conn.user="root";
	   	   Conn.password="";
		   Conn.host="http://localhost:8123/query";
		   Conn.database="test";
		   
		   String result = Conn.Query("select table person");
		   System.out.println( result );
         /*
            JSON PARSER -> 
            https://mvnrepository.com/artifact/com.googlecode.json-simple/json-simple
        */
```

### [NODE.JS][31]
NPM INSTALL :  ```npm i request -g``` <br>
CONNECTOR   :  [nodejs_express_connector.js][3]
```js
    /*Client Examples*/
    const MiraDB = require("./nodejs_express_connector");
        
        var db = new MiraDB("root","","http://localhost:8123/query","test");   
            db.query("select table test",function(data,err){
                console.log(data);
            });
```


### [PHP][21] 
CONNECTOR : [miradb_php_connector.php][2]
```php
<?php
    /*Client Examples*/
    include 'miradb_php_connector.php';
        $db = new MiraDB("root","","http://localhost:8123/query","test");
             echo  $db->query("select table person");
?>
```

### [DLL][61] 
CONNECTOR : [MIRA 1.0.1][6]
```c#
        /*Client Examples*/
            MIRA.database db = new MIRA.database();
            db.User = "root";
            db.Password = "";
            db.Database = "test";
            db.Server = "http://localhost:8123/query";

                String result = db.Query("select table person"); // DATABASE QUERY
                ArrayList data = db.row(result); // DATABASE QUERY
                int count = data.Count; // RECORD COUNT
  
            Debug.Log( count ); //Total Record Count <number>;
            Debug.Log( data[1]["col1"] );//Select Row Index -> data[<INDEX>][<COLUMN_NAME>]; 

            foreach ( dynamic value in data) {
                //List All Rows -> value[<COLUMN_NAME>]
                Debug.Log( value["col1"] ,value["col2"] ,value["col3"]  );
            }
```

### [Express.js][51]
CONNECTOR :  [miradb.express.1.0.1.js][5]
```js
    /*Client Examples*/
    var db = new MiraDB("root","","http://localhost:8123/query","test");      
       db.query("select table person",function(result){
          console.log(JSON.stringify( result));
       });    
```

### [Socket.IO][11]
CONNECTOR :  [miradb.socket.1.0.1.js][1]
```js    
    /*Client Examples*/   
    var db = new MiraDB("root","","127.0.0.1:8123","test");               
        db.Connect();
          db.Query("select table person",function(result){
             console.log(JSON.stringify( result));
          });     
```


[1]: Socket/ "miradb.socket.1.0.1.js"
[2]: PHP/ "miradb_php_connector.php"
[3]: Nodejs/ "nodejs_express_connector.js"
[4]: java/ "mira_db_connector.jar"
[5]: Express/ "miradb.express.1.0.1.js"
[6]: DLL/ "MIRA.dll"

[11]: Socket/ "miradb.socket.1.0.1.js"
[21]: PHP/ "miradb_php_connector.php"
[31]: Nodejs/ "nodejs_express_connector.js"
[41]: java/ "mira_db_connector.jar"
[51]: Express/ "miradb.express.1.0.1.js"
[61]: DLL/ "MIRA.dll"