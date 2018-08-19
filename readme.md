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


* [EXPRESS][df1]   DATABASE SERVER
* [SOCKET.IO][df2] DATABASE SERVER  
*  NODEJS  DATABASE CLIENT 
*  UNITY5  DATABASE CLIENT 
*  PYTHON  DATABASE CLIENT
*  JAVA    DATABASE CLIENT 
*  C#      DATABASE CLIENT 
*  JQUERY  DATABASE CLIENT 
  
## Nodejs  > custom_server.js

easy integrate with your existing systems (express,socket.io,python,nwjs,react,unity5,more..)

 ```js
    // INCLUDE MIRA
    const mira = require("mira-db");
    // SET YOUR USER PERMISSION
    var perms = { 
        UNIQUE:true,
        SELECT:true,
        ADD:true,
        UPDATE:true,
        RENAME:true,
        DROP:true,
        DELETE:true,
        CREATE:true,
        LIST:true 
    }
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

## License MIT

   [df2]: </tree/master/SERVER EXAMPLE/Remote Database (socket.io Server)>
   [df1]: </tree/master/SERVER EXAMPLE/Remote Database (express Server)>
   [npm-image]: https://img.shields.io/npm/v/mira-db.svg?style=flat
   [npm-url]: https://npmjs.org/package/mira-db
   [downloads-image]: https://img.shields.io/npm/dm/mira-db.svg?style=flat
   [downloads-url]: https://npmjs.org/package/mira-db
