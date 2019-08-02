# MiraDB (OOJS) Database Management System

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Try mira-db on RunKit](https://badge.runkitcdn.com/mira-db.svg)](https://npm.runkit.com/mira-db)
[![Slack Status](https://img.shields.io/badge/slack-Nodeclient-blue.svg?longCache=true&style=flat)](https://join.slack.com/t/nodeclient/shared_invite/enQtNDg5NzE0MjQyNTMyLTE3ZTdkMDQ0ODEzZThmNDQ3NjhhZGMwZWQ4MDI0YTI2MDEwOTQ3YjVjZmUyY2FmZTlhN2IwMDYwNmI4YjhjNzk)
[![Known Vulnerabilities](https://snyk.io/test/npm/mira-db/badge.svg)](https://snyk.io/test/npm/mira-db)

Mira-DB MIT-lisance open source (OOJSDB)

![news](https://raw.githubusercontent.com/Nodeclient/Mira-DB/master/banner.jpg)

## Install (global)
```
npm install -g mira-db
```

## Mira Source Example

* [GITHUB](https://github.com/Nodeclient/Mira-DB) - Example Projects
* [YOUTUBE](https://www.youtube.com/watch?v=wWt-ZyinFdM&list=PLq4qcUhhlBq4nsD4oVym8jz1WwKCFlDx1) - Tutorial & How to use
* [HELP](https://miradb.com/docs/) - Documents

## Mira Regular Expression Querys
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

## Example > "local-database.js"

```js
    // IMPORT MODULE
    const mira = require("mira-db");
    // YOUR APP PERMISSION
    var Perms = { SELECT:true,ADD:true,UNIQUE:true,UPDATE:true,RENAME:true,DROP:true,DELETE:true,CREATE:true,LIST:true }
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
    mydb.Query(query ,function(result){
      console.log(  result );
    });           
```

#### Updates & Fixes


## License

Copyright (c) 2018 Levent Inan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm-image]: https://img.shields.io/npm/v/mira-db.svg?style=flat
[npm-url]: https://npmjs.org/package/mira-db
[downloads-image]: https://img.shields.io/npm/dm/mira-db.svg?style=flat
[downloads-url]: https://npmjs.org/package/mira-db
