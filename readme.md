# Mira Database Server (1.0.11 stable version)

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Try mira-db on RunKit](https://badge.runkitcdn.com/mira-db.svg)](https://npm.runkit.com/mira-db)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/mira-db)
[![Known Vulnerabilities](https://snyk.io/test/npm/mira-db/badge.svg)](https://snyk.io/test/npm/mira-db)

Mira-DB local & remote database server

## Installation
```
npm install mira-db --save
```

## Example tutorials

* [GITHUB](https://github.com/Nodeclient/Mira-DB) - (client , server , connector) example sources
* [HELP](https://github.com/Nodeclient/Mira-DB/tree/master/Query%20schema) - query help files
* [YOUTUBE](https://www.youtube.com/watch?v=wWt-ZyinFdM&list=PLq4qcUhhlBq4nsD4oVym8jz1WwKCFlDx1) - tutorial videos

## Example Querys

    SELECT TABLE <TABLE_NAME>; 
    SELECT TABLE <TABLE_NAME> COUNT; 
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"];
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"] FIND ["SEARCH_STRING"]; 
    UPDATE ROW <TABLE_NAME> COLUMN ["COL1","COL2",..] VALUE ["VAL1","VAL2"] FIND ["COL1","SEARCH_STRING"];
    ADD ROW <TABLE_NAME> COLUMN ["COL1","COL2","COL3"] VALUE ["VAL1","VAL2","VAL3"]; 
    ADD COLUMN ["COL1","COL2","COL3"] TABLE <TABLE_NAME>; 
    RENAME TABLE ["TABLE"] VALUE ["NEW_NAME"]; 
    RENAME DATABASE ["DATABASE_NAME"] VALUE ["NEW_NAME"]; 
    RENAME COLUMN ["COL1","COL2"] TABLE <TABLE_NAME> VALUE ["NEW_1","NEW_2"]; 
    DELETE COLUMN <COLUMN_NAME> TABLE <TABLE_NAME>; 
    DELETE ROW <TABLE_NAME> COLUMN <COLUMN_NAME> VALUE ["STRING"];
    CREATE TABLE <TABLE_NAME> COLUMN ["COL1","COL2","COL3"] VALUE ["VAL1","VAL2","VAL3"];
    CREATE DATABASE <DATABASE_NAME>;
    DROP DATABASE <DATABASE_NAME>;
    DROP TABLE <TABLE_NAME>;
    LIST DATABASE;
    LIST TABLE <DATABASE_NAME>;
  
## Nodejs  >  local_custom_server.js

easy integrate with your existing systems (express,socket.io,python,nwjs,react,unity5,more..)

 ```js
    // INCLUDE MIRA
    const mira = require("mira-db");
    // SET YOUR USER PERMISSION
    var perms = { SELECT:true,ADD:true,UPDATE:true,RENAME:true,DROP:true,DELETE:true,CREATE:true,LIST:true }
    // YOUR STORAGE FOLDER FULL PATH
    var My_Db_folder = "/your_database_folder";
    //SELECT DATABASE
    var My_Db_name = "test";
    // CREATE NEW DATABASE OBJECT
    var mydb = new mira(My_Db_folder,"UTF-8");
    // SET QUERY
    var query = 'SELECT TABLE person';
    //DATA RESULT
    var result = mydb.Query(query,My_Db_name,perms);
    console.log(  result );
```

## Nodejs  >  remote_server.js

---------------------------------------------
    npm install socket.io
---------------------------------------------

 ```js
const io = require("socket.io"), 
      user = require('mira-db/userdata'),
      DB = require('mira-db'),
server = io.listen(8123);

var UserData = new Map();     
var UserPerm = new Map();  

var Storage_Folder =  process.cwd() + "/data";
var database = new DB(Storage_Folder,"UTF-8");

server.on("connection", (socket) => {
    var connect_time = new Date();
    UserData.set(socket.id, true); 

    socket.on("disconnect", () => { 
        UserData.delete(socket.id); 
        UserPerm.delete(socket.id);
    });

    socket.emit("EventData",[connect_time,"CONNECTION_SUCCESS"]);
    
    socket.on("query", (data) => {
        queryKey = UserData.get(data["id"]);
        PermKey = UserPerm.get(data["id"])[0];
        DBKey = UserPerm.get(data["id"])[1];
        var PermsData = user.LoadPermsData(PermKey+".perm");
    
        if(queryKey){
            var result;
            if(DBKey=="*"){
                result = database.Query(data["query"],data["db"],PermsData);
            } else {
                result = database.Query(data["query"],DBKey,PermsData);
            }
            socket.emit("QueryData",result);
        } else {
            socket.emit("QueryData",[data,"LOGIN_ERROR","CANNOT ACCESS DATABASE"]);
        }
    });


    socket.on("Login", (u) => {
        var LoginData = user.LoadLoginData("user.conf"); 
        var result = user.Login(u["user"], u["pass"],LoginData) ;
            if (result){
                UserPerm.set(socket.id,[result["perm"],result["db"]]);
                socket.emit("EventData",[true,"LOGIN_SUCCESS","",socket.id]);
            }else{
                socket.emit("EventData",[false,"LOGIN_ERROR","INVALID USERNAME OR PASSWORD",0]);
            }
    });

});
```

####Updates & Fixed
+ Version 1.0.11
    + "ADD,RENAME,DELETE,UPDATE,SELECT" command critical bugs fixed
    + add advanced query error debug message
    + data result even faster than before
+ Version 1.0.10
	+ Update and fixed "userdata"


[![N|Solid](https://miradbblog.files.wordpress.com/2018/08/untitled-11.jpg)](https://www.npmjs.com/package/mira-db) 

## License

MIT

[npm-image]: https://img.shields.io/npm/v/mira-db.svg?style=flat
[npm-url]: https://npmjs.org/package/mira-db
[downloads-image]: https://img.shields.io/npm/dm/mira-db.svg?style=flat
[downloads-url]: https://npmjs.org/package/mira-db