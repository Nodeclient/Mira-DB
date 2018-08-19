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


* [EXPRESS][df1]    ** SERVER**
* [SOCKET.IO][df2]  ** SERVER**  
* [NODEJS][df7]      CLIENT 
* [UNITY5][df5]      CLIENT 
* [PYTHON][df4]      CLIENT
* [JAVA][df6]        CLIENT 
* [C#][df3]          CLIENT 
* [JQUERY][df8]      CLIENT 
  
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

   [df8]: </CLIENT EXAMPLE/Express Server clients/Example Client (HTML)>
   [df7]: </CLIENT EXAMPLE/Socket Server clients/Example Client (nodejs)>
   [df6]: </CLIENT EXAMPLE/Express Server clients/Example Client (java)>
   [df5]: </CLIENT EXAMPLE/Express Server clients/Example Client (UNITY5 GAME ENGINE)>
   [df4]: </CLIENT EXAMPLE/Express Server clients/Example Client (PYTHON)>
   [df3]: </CLIENT EXAMPLE/Express Server clients/Example Client (C%23)>
   [df2]: </SERVER EXAMPLE/Remote Database (socket.io Server)>
   [df1]: </SERVER EXAMPLE/Remote Database (express Server)>
   [npm-image]: https://img.shields.io/npm/v/mira-db.svg?style=flat
   [npm-url]: https://npmjs.org/package/mira-db
   [downloads-image]: https://img.shields.io/npm/dm/mira-db.svg?style=flat
   [downloads-url]: https://npmjs.org/package/mira-db
