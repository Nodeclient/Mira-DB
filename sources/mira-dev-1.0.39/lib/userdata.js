/*
    Mira-db 
    https://www.npmjs.com/package/mira-db
*/

var fs = require('fs');
//var handling = require('./error');
module.exports = {
    LoadLoginData: function (cnf) {
        var LoginData = [], SplitLoginData = /<(.*?)>/g;
        if (fs.existsSync(cnf)) {
            var array = fs.readFileSync(cnf).toString().split("\n");
            for (i in array) {
                while (_outcon = SplitLoginData.exec(array[i])) {
                    i++;
                    LoginData.push(_outcon[1]);
                }
            }
        } else {
            return [false, "JQL_CONF_FILE", "file does not exist"]
        }
        return LoginData;
    },
    LoadPermsData: function (cnf) {
        var array = {};
        if (fs.existsSync(cnf)) {
            var array = JSON.parse(fs.readFileSync(cnf).toString());
        } else {
            return [false, "JQL_PERM_FILE", "file does not exist"]
        }
        return array;
    },
    Login: function (Usr, Pas, LoginData) {
        var _ClearTag = /[null]/g;
        var ExportObject = {};
        for (var key in LoginData) {
            var _USER = LoginData[key].toLowerCase().split(":");

            if (_USER[0] == Usr && _USER[1].replace(_ClearTag, "") == Pas) {
                ExportObject.user = _USER[0];
                ExportObject.pass = _USER[1];
                ExportObject.perm = _USER[2];
                ExportObject.db = _USER[3];
                return ExportObject;
            } else {
                var ExportObject = {};
            }
        }
        return false;
    }
}