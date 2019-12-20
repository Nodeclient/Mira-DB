/* MIRA-DB GLOBAL SETTINGS (NEW) 0.39 */
    process.env.SET_LANG="en_us";                    //Select current language
    process.env.MIRA_DB_TOKEN="E4WXqn_IotaTPN6E";   //Database encryption security token
    process.env.SET_FILE_HEADER="JQL1";            //Database file header
    process.env.SET_FILE_EXTENSION="jsq";         //Database file extension (Do not use the dot)

// MIRA-DB EXPRESS REMOTE DATABASE
var bodyParser = require("body-parser");
// Express Build ver. (express@5.0.0-alpha.7)
var express = require('express');
var mira = require('mira-db');
var UserData = require('mira-db').userdata;
var AppInfo = require('mira-db').info;
var app = express();
var MDB = JSON.parse(require('fs').readFileSync('setting.json', 'utf8')); //require( path.join(process.cwd(), "setting.json") );
var USR_PERM = {};

// SET YOUR STORAGE FOLDER
var DB_DIR = MDB["DB_LOC"]; 
// MEMORY LIMIT
var MAX_MEMORY = MDB["MAX_MEMORY"];
app.use(express.static(MDB["WEB_FOLDER"]));
app.use(bodyParser.json({limit: MAX_MEMORY, extended: true}));
app.use(bodyParser.urlencoded({limit: MAX_MEMORY, extended: true }));

app.get('/', function (req, res, next) {
    res.sendFile( process.cwd()+'/'+MDB["WEB_FOLDER"]+'/index.html');
});

app.post('/query', function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);

    var DB_RESULT = null;
    var DB_NAME = req.body["db"];
    var DB_USER = req.body["user"];
    var DB_PASS = req.body["pass"];
    var DB_QUERY = req.body["query"];

    var expressDB = new mira(DB_DIR, DB_NAME, USR_PERM, "UTF-8");     

    var LOGIN_DATA = UserData.LoadLoginData("user.conf");
    if (LOGIN_DATA[0]) {
        var result = UserData.Login(DB_USER, DB_PASS, LOGIN_DATA);
        var USR_PERM = UserData.LoadPermsData(result["perm"] + ".perm");
        if (result) {
            DB_RESULT = expressDB.Query(DB_QUERY);
            res.status(200).send(DB_RESULT);
        } else {
            res.status(401).send([false,"LOGIN_ERROR","INVALID USERNAME OR PASSWORD",0]);
        }
    } else {
            res.status(500).send([false, "SERVER_ERROR", "INVALID CONF FILE", 100]);
    }
});


var server = app.listen(MDB["PORT"]);

app.use((err, req, res, next) => {
    if (err){
         res.status(500).send([false, "SERVER_ERROR", "MEMORY ERROR", 100]);    
    }
});

console.log(AppInfo["name"],AppInfo["version"],"\nPORT:", MDB["PORT"],"\nDATA LOCATION:", "'"+ MDB["DB_LOC"]+"'");