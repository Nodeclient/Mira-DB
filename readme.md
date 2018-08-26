# Mira Database Server

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Try mira-db on RunKit](https://badge.runkitcdn.com/mira-db.svg)](https://npm.runkit.com/mira-db)
[![Slack Status](https://img.shields.io/badge/slack-Nodeclient-blue.svg?longCache=true&style=flat)](https://nodeclient.slack.com)
[![Known Vulnerabilities](https://snyk.io/test/npm/mira-db/badge.svg)](https://snyk.io/test/npm/mira-db)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

Mira-DB local & remote database
easy integrate with your existing systems (express,socket.io,python,nwjs,react,unity5,more..)

## HELP DOCUMENT
* [Help Document][df9]

## SOURCES

* [EXPRESS][df1]    **SERVER**
* [SOCKET.IO][df2]  **SERVER**  

* [NODEJS][df7]      CLIENT 
* [UNITY5][df5]      CLIENT 
* [PYTHON][df4]      CLIENT
* [PHP][df10]        CLIENT
* [JAVA][df6]        CLIENT 
* [C#][df3]          CLIENT 
* [JQUERY][df8]      CLIENT 
  
## CONNECTOR
* [CONNECTOR][df11]




## Nodejs  > custom_server.js

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
    var My_db_folder = "/your_database_folder";
    //SELECT DATABASE
    var My_db_name = "test";
    // CREATE NEW DATABASE OBJECT
    var mydb = new mira(My_db_folder,"UTF-8");
    // SET QUERY
    var query = 'SELECT TABLE person';
```
```js    
    // RESULT METHOD (EXAMPLE) 1
    var result = mydb.Query(query,My_db_name,perms);
    console.log(  result );
```  
```js    
    // RESULT METHOD (EXAMPLE) 2
    mydb.Query(query,My_Db_name,perms ,function(result){
      console.log(  result );
    });           
```  


-----
## Nodejs  > Backup.js

```js
        // INCLUDE BACKUP
        var Backup = require('mira-db/backup');
        // <CHAR_SET> , <FILE_DESCRIPTION>
        var SetBackup = new Backup("utf8","Hello this is my first backup file");

        // Backup & export database storage folder
        // <YOUR_DATABASE_FOLDER> , <BACKUP_FILE_NAME>
        SetBackup.Export("/YOUR_STORAGE_FOLDER","c:/myStorage.backup",function(data){
            console.log(data)
        });

        // Read backup file Info
        // <BACKUP_FILE_NAME>
        SetBackup.Info("c:/myStorage.backup",function(data){
            console.log(data)
        });

        // Restore a database backup
        // <YOUR_DATABASE_FOLDER> , <BACKUP_FILE_NAME>
        SetBackup.Import("/YOUR_STORAGE_FOLDER","c:/myStorage.backup",function(data){
            console.log( data )
        });
```

## License MIT

Copyright (c) 2018 Levent Inan, https://github.com/Nodeclient/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

   [df11]: <https://github.com/Nodeclient/Mira-DB/tree/master/CONNECTOR>
   [df10]: <https://github.com/Nodeclient/Mira-DB/tree/master/CLIENT EXAMPLE/Express Server clients/Example Client (PHP5)>
   [df9]: <https://github.com/Nodeclient/Mira-DB/tree/master/HELP DOCS>
   [df8]: <https://github.com/Nodeclient/Mira-DB/tree/master/CLIENT EXAMPLE/Express Server clients/Example Client (HTML)>
   [df7]: <https://github.com/Nodeclient/Mira-DB/tree/master/CLIENT EXAMPLE/Socket Server clients/Example Client (nodejs)>
   [df6]: <https://github.com/Nodeclient/Mira-DB/tree/master/CLIENT EXAMPLE/Express Server clients/Example Client (java)>
   [df5]: <https://github.com/Nodeclient/Mira-DB/tree/master/CLIENT EXAMPLE/Express Server clients/Example Client (UNITY5 GAME ENGINE)>
   [df4]: <https://github.com/Nodeclient/Mira-DB/tree/master/CLIENT EXAMPLE/Express Server clients/Example Client (PYTHON)>
   [df3]: <https://github.com/Nodeclient/Mira-DB/tree/master/CLIENT EXAMPLE/Express Server clients/Example Client (C%23)>
   [df2]: <https://github.com/Nodeclient/Mira-DB/tree/master/SERVER EXAMPLE/Remote Database (socket.io Server)>
   [df1]: <https://github.com/Nodeclient/Mira-DB/tree/master/SERVER EXAMPLE/Remote Database (express Server)>
   [npm-image]: https://img.shields.io/npm/v/mira-db.svg?style=flat
   [npm-url]: https://npmjs.org/package/mira-db
   [downloads-image]: https://img.shields.io/npm/dm/mira-db.svg?style=flat
   [downloads-url]: https://npmjs.org/package/mira-db
