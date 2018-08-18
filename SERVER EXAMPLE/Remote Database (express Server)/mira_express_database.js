    var bodyParser = require("body-parser");
    var express = require('express');
    var mira = require('mira-db');
    var UserData = require('mira-db/userdata');
    var app = express();
 
    var USR_PERM = { SELECT:true,ADD:true,UPDATE:true,RENAME:true,DROP:true,DELETE:true,CREATE:true,LIST:true } ;
    var DB_DIR = "./data";

    app.use(express.static('public')); 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(function (req, res, next) {  next(); });
    app.get('/', function (req, res, next){
        res.sendFile( process.cwd()  +'/public/index.html');
    });

     app.post('/query', function (req, res, next){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        
        var DB_NAME = req.body["db"];
        var DB_USER = req.body["user"];
        var DB_PASS = req.body["pass"];
        var DB_QUERY = req.body["query"];
        var expressDB = new mira(DB_DIR,"UTF-8");

    var LOGIN_DATA = UserData.LoadLoginData("user.conf"); 
            if(LOGIN_DATA[0]){
                var result = UserData.Login( DB_USER , DB_PASS , LOGIN_DATA ) ;
                var USR_PERM = UserData.LoadPermsData(result["perm"]+".perm");
                if (result){ 
                        if(result["db"]=="*"){
                            var DB_RESULT = expressDB.Query(DB_QUERY,DB_NAME,USR_PERM);
                            res.send(DB_RESULT);
                        } else {
                            var DB_RESULT = expressDB.Query(DB_QUERY,result["db"],USR_PERM);
                            res.send(DB_RESULT);
                        }
                }else{
                    res.status(401).send([false,"LOGIN_ERROR","INVALID USERNAME OR PASSWORD",0]);
                }   
                } else {
                    res.status(500).send([false,"SERVER_ERROR","INVALID CONF FILE",100]);
            }
    });

    var server = app.listen(8123);
