# MIRA-DB (OOJSDB)

[![NPM version][npm-image]][npm-url]
![npm](https://img.shields.io/npm/dt/mira-db)
[![Try mira-db on RunKit](https://badge.runkitcdn.com/mira-db.svg)](https://npm.runkit.com/mira-db)
[![Slack Status](https://img.shields.io/badge/slack-Nodeclient-blue.svg?longCache=true&style=flat)](https://join.slack.com/t/nodeclient/shared_invite/enQtNDg5NzE0MjQyNTMyLTE3ZTdkMDQ0ODEzZThmNDQ3NjhhZGMwZWQ4MDI0YTI2MDEwOTQ3YjVjZmUyY2FmZTlhN2IwMDYwNmI4YjhjNzk)
[![Known Vulnerabilities](https://snyk.io/test/npm/mira-db/badge.svg)](https://snyk.io/test/npm/mira-db)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

MiraDB is open source javascript object oriented database management system 

## Help documentation
* [DOCUMENTS][df9]

## Releases & download
* [MIRADB BINARY][df15]
* [SIMPLE WEB ADMIN][df14] 


----
### What makes mira-db different?
 > Mira-db is a non-relational database
 
 > Stored, table are a binary encrypted JSON files.
 
 > You can restrict each user's table and database , also has access to nine (boolean) types of permission for a table.
 
 > Mira query is a contain matches to regular expressions syntax but very similar to mysql structure and of course very simple for developers to learn and use.

 > Mira-db is supporting cross-application. (also you can reach many samples on the github page about this)
 
 > You can easy management your own databases with web interface.
 
----

## Mira-query list
```bash
    UNIQUE COLUMN <COLUMN_NAME> TABLE <TABLE_NAME>;
    SELECT TABLE <TABLE_NAME>; 
    SELECT TABLE <TABLE_NAME> COUNT; 
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"];
    SELECT TABLE <TABLE_NAME> LIMIT ["1","5"];
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"] FIND ["SEARCH_STRING"];
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"] FIND ["SEARCH_STRING"] LIKE; 
    UPDATE ROW <TABLE_NAME> COLUMN ["COL1","COL2",..] VALUE ["VAL1","VAL2"] FIND ["COL1","SEARCH_STRING"];
    ADD ROW <TABLE_NAME> COLUMN ["COL1","COL2","COL3"] VALUE ["VAL1","VAL2","VAL3"]; 
    ADD COLUMN ["COL1","COL2","COL3"] TABLE <TABLE_NAME>; 
    RENAME TABLE ["TABLE"] VALUE ["NEW_NAME"]; 
    RENAME DATABASE ["DATABASE_NAME"] VALUE ["NEW_NAME"]; 
    RENAME COLUMN ["COL1","COL2",..] TABLE <TABLE_NAME> VALUE ["NEW_1","NEW_2"]; 
    DELETE COLUMN ["COL1","COL2",..] TABLE <TABLE_NAME>; 
    DELETE ROW <TABLE_NAME> COLUMN <COLUMN_NAME> VALUE ["STRING"];
    DELETE ROW <TABLE_NAME> INDEX <INDEX_NUMBER>;
    CREATE TABLE <TABLE_NAME> COLUMN ["COL1","COL2","COL3"] VALUE ["VAL1","VAL2","VAL3"];
    CREATE DATABASE <DATABASE_NAME>;
    DROP DATABASE <DATABASE_NAME>;
    DROP TABLE <TABLE_NAME>;
    LIST DATABASE;
    LIST TABLE <DATABASE_NAME>;
```

## Sample : "local-database.js"

```js
    /* MIRA-DB GLOBAL SETTINGS (NEW) */
     process.env.SET_LANG="en_us"; //Language setting
    /* important! if you change the token , 
        you can't reading or writing data from by default (mira-db) database's */
     process.env.MIRA_DB_TOKEN="E4WXqn_IotaTPN6E"; //Database encryption token
     process.env.SET_FILE_HEADER="JQL1"; //File header
     process.env.SET_FILE_EXTENSION="jsq"; //File extension (Do not use the dot)
    
    /* IMPORT MODULE */
    const mira = require("mira-db");
    
    /* PERMISSION */
    var Perms = { 
      SELECT:true,
      ADD:true,
      UNIQUE:true,
      UPDATE:true,
      RENAME:true,
      DROP:true,
      DELETE:true,
      CREATE:true,
      LIST:true }
      
    /* STORAGE FOLDER */
    var Storage = __dirname + "/data";
    /* DATABASE NAME */
    var DB = "test";
    /* CREATE A NEW MIRA OBJECT */
    var new_database = new mira(Storage,DB,Perms,"UTF-8");
    /* MIRA-QUERY */
    var query = 'SELECT TABLE person'
```

```js   
    /* SAMPLE (RETURN) */
    var result = new_database.Query(query);  
    console.log(  result );
```
```js     
    /* SAMPLE (CALLBACK) */
    new_database.Query(query ,function(result){
      console.log(  result );
    });           
```

## Connector | open-source (zip archive)
* [CONNECTORS][df1]

## Clients | open-source (zip archive)
* [CLIENTS][df2]


## License MIT

Copyright (c) 2018 , https://github.com/Nodeclient/

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

   [df142]: <https://github.com/Nodeclient/Mira-DB/blob/master/language/readme.md>
   [df141]: <https://github.com/Nodeclient/Mira-DB/blob/master/language/sample.json>
   [df200]: <https://github.com/Nodeclient/Mira-DB/releases>
   [df2]: <https://git.io/fpQur>
   [df1]: <https://git.io/fpQua>
   [df15]: <https://git.io/fpabN>
   [df14]: <https://nodeclient.github.io/helpdocs/#simple-admin-section>
   [df9]: <https://nodeclient.github.io/helpdocs/>

   [npm-image]: https://img.shields.io/npm/v/mira-db.svg?style=flat
   [npm-url]: https://npmjs.org/package/mira-db
   [downloads-image]: https://img.shields.io/npm/dm/mira-db.svg?style=flat
   [downloads-url]: https://npmjs.org/package/mira-db
