# Mira Database Server

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

## SOURCES

```
   EXPRESS    DATABASE SERVER
   SOCKET.IO  DATABASE SERVER  
   
   NODEJS  DATABASE CLIENT 
   UNITY5  DATABASE CLIENT 
   PYTHON  DATABASE CLIENT
   JAVA    DATABASE CLIENT 
   C#      DATABASE CLIENT 
   JQUERY  DATABASE CLIENT 

```
  
## Example Querys
    UNIQUE COLUMN <COLUMN_NAME> TABLE <TABLE_NAME>;
    SELECT TABLE <TABLE_NAME>; 
    SELECT TABLE <TABLE_NAME> COUNT; 
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"];
    SELECT TABLE <TABLE_NAME> LIMIT ["0","10"];
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"] FIND ["SEARCH_STRING"]; 
    UPDATE ROW <TABLE_NAME> COLUMN ["COL1","COL2"] VALUE ["VAL1","VAL2"] FIND ["COL1","SEARCH_STRING"];
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
    var perms = { UNIQUE:true,SELECT:true,ADD:true,UPDATE:true,RENAME:true,DROP:true,DELETE:true,CREATE:true,LIST:true }
    // YOUR STORAGE FOLDER FULL PATH
    var My_Db_folder = "/your_database_folder";
    //SELECT DATABASE
    var My_Db_name = "test";
    // CREATE NEW DATABASE OBJECT
    var mydb = new mira(My_Db_folder,"UTF-8");
    // SET QUERY
    var query = 'SELECT TABLE person';

    
    // RESULT METHOD (EXAMPLE) 1
    var result = mydb.Query(query,My_Db_name,perms);
    console.log(  result );
    
    // RESULT METHOD (EXAMPLE) 2
    mydb.Query(query,My_Db_name,perms ,function(result){
      console.log(  result );
    });           
    
```


[![N|Solid](https://miradbblog.files.wordpress.com/2018/08/untitled-11.jpg)](https://www.npmjs.com/package/mira-db) 

## License

MIT

[npm-image]: https://img.shields.io/npm/v/mira-db.svg?style=flat
[npm-url]: https://npmjs.org/package/mira-db
[downloads-image]: https://img.shields.io/npm/dm/mira-db.svg?style=flat
[downloads-url]: https://npmjs.org/package/mira-db
