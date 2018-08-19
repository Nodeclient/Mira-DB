
### Exress Connector
 ```js
    <script src="./jquery.min.js"></script>
    <script src="./miradb.express.1.0.1.js"></script>

    <script>
        $(document).ready(function() {
            var db = new MiraDB("root","","http://localhost:8123/query","test");
            db.query("select table person",function(result){
                $("p").text( JSON.stringify( result) );
            });     
        }); 
    </script>
```

### Socket Connector
 ```js
    <script src="./socket.io-1.4.5.js"></script>
    <script src="./jquery.min.js"></script>
    <script src="./miradb.socket.1.0.1.js"></script>

    <script>
        $(document).ready(function() {
            var db = new MiraDB("root","","127.0.0.1:8123","test");
                
                db.Connect();

                db.Query("select table person",function(result){
                    $("p").text( JSON.stringify( result) );
                });     
        }); 
    </script>
```