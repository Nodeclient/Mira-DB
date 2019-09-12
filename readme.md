# Mira-DB (OOJSDB)

[![NPM version][npm-image]][npm-url]
![npm](https://img.shields.io/npm/dt/mira-db)
[![Try mira-db on RunKit](https://badge.runkitcdn.com/mira-db.svg)](https://npm.runkit.com/mira-db)
[![Slack Status](https://img.shields.io/badge/slack-Nodeclient-blue.svg?longCache=true&style=flat)](https://join.slack.com/t/nodeclient/shared_invite/enQtNDg5NzE0MjQyNTMyLTE3ZTdkMDQ0ODEzZThmNDQ3NjhhZGMwZWQ4MDI0YTI2MDEwOTQ3YjVjZmUyY2FmZTlhN2IwMDYwNmI4YjhjNzk)
[![Known Vulnerabilities](https://snyk.io/test/npm/mira-db/badge.svg)](https://snyk.io/test/npm/mira-db)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

MiraDB is open source javascript object oriented database management system that uses "regular expression" queries 

## Help documentation
* [DOCUMENTS][df9]

## Releases & download
* [MIRADB BINARY][df15]
* [SIMPLE WEB ADMIN][df14] 

## Example usage (Local Database)

 ```js
    // IMPORT MODULE
    const mira = require("mira-db");
    // SET YOUR APP PERMISSION
    var Perms = { 
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
    // DATABASE STORAGE FOLDER
    var Storage = __dirname + "/data";
    // DATABASE NAME
    var DB = "test";
    // CREATE NEW MIRA-DB OBJECT
    var new_database = new mira(Storage,DB,Perms,"UTF-8");
    //SET QUERY
    var query = 'SELECT TABLE person'
```
```js    
    // RESULT (RETURN EXAMPLE)
    var result = new_database.Query(query);  
    console.log(  result );
```  
```js    
    // RESULT (CALLBACK EXAMPLE)
    new_database.Query(query ,function(result){
      console.log(  result );
    });            
```  

### last published version (new)
* [Mira-DB-dev-1.0.39][df200]

## Connector | open-source (zip archive)
* [CONNECTORS][df1]

## Clients | open-source (zip archive)
* [CLIENTS][df2]


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

   [df200]: <https://git.io/JemsI>
   [df2]: <https://git.io/fpQur>
   [df1]: <https://git.io/fpQua>
   [df15]: <https://git.io/fpabN>
   [df14]: <http://miradb.com/docs/#simple-admin-section>
   [df9]: <https://miradb.com/docs>

   [npm-image]: https://img.shields.io/npm/v/mira-db.svg?style=flat
   [npm-url]: https://npmjs.org/package/mira-db
   [downloads-image]: https://img.shields.io/npm/dm/mira-db.svg?style=flat
   [downloads-url]: https://npmjs.org/package/mira-db
