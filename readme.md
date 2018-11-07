# Mira Database Server

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Try mira-db on RunKit](https://badge.runkitcdn.com/mira-db.svg)](https://npm.runkit.com/mira-db)
[![Slack Status](https://img.shields.io/badge/slack-Nodeclient-blue.svg?longCache=true&style=flat)](https://nodeclient.slack.com)
[![Known Vulnerabilities](https://snyk.io/test/npm/mira-db/badge.svg)](https://snyk.io/test/npm/mira-db)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

Mira-DB local & remote database server
*  Install `npm i mira-db`
---

## Help documentation
* [Help Document][df9]

## Example client & server

* [EXPRESS][df1]    **SERVER (recommend)**
* [SOCKET.IO][df2]  **SERVER (legacy)**  

* [NODEJS][df7]      CLIENT 
* [UNITY5][df5]      CLIENT 
* [PYTHON][df4]      CLIENT
* [PHP][df10]        CLIENT
* [JAVA][df6]        CLIENT 
* [C#][df3]          CLIENT 
* [JQUERY][df8]      CLIENT 
  
## Connector
* [CONNECTOR][df11]

# In development
* [READ NOW][df12] 

---
## Example usage (miradb) > remote_databae
* [REMOTE DATABASE][df13] 
## Example usage (miradb) > local_databae

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
    // METHOD (EXAMPLE 1)
    var result = mydb.Query(query,My_db_name,perms);
    console.log(  result );
```  
```js    
    // METHOD (EXAMPLE 2) 
    mydb.Query(query,My_Db_name,perms ,function(result){
      console.log(  result );
    });           
```  


-----
## Check this project for backup
* More Detail : https://github.com/Nodeclient/install-make
-----

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

   [df13]: <https://git.io/fpUJK>
   [df12]: <https://git.io/fpUf2>
   [df11]: <https://git.io/fpUfB>
   [df10]: <https://git.io/fpUfl>
   [df9]: <https://git.io/fpUfc>
   [df8]: <https://git.io/fpUfY>
   [df7]: <https://git.io/fpUfm>
   [df6]: <https://git.io/fpUft>
   [df5]: <https://git.io/fpUvp>
   [df4]: <https://git.io/fpUvy>
   [df3]: <https://git.io/fpUvE>
   [df2]: <https://git.io/fpUvl>
   [df1]: <https://git.io/fpvol>
   [npm-image]: https://img.shields.io/npm/v/mira-db.svg?style=flat
   [npm-url]: https://npmjs.org/package/mira-db
   [downloads-image]: https://img.shields.io/npm/dm/mira-db.svg?style=flat
   [downloads-url]: https://npmjs.org/package/mira-db
