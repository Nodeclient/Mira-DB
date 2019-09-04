/*
    Mira-db 
    https://www.npmjs.com/package/mira-db
*/

const cp = require('crypto');
const filesystem = require('fs');
const path = require('path');
const handling = require('./error_handling');

const config = {
    cryptkey: cp.createHash('sha256').update('bin').digest(),
    signature: "E4WXqn_IotaTPN6E", // Database File Signature ( GLOBAL KEY : E4WXqn_IotaTPN6E )
    alg: 'aes-256-ctr', // Do not change the algorithm
    header: 'JQL1', // Database file header
    ext: ".jsq" // Database file extention
}

function enc(text) {
    var r = cp.createCipheriv(config.alg, config.cryptkey, config.signature);
    var c = config.header + r.update(text, 'utf8', 'binary');
    c += r.final('binary');
    return c;
}

function dec(text) {
    if (text === null || typeof text === 'undefined' || text === '') {
        return text;
    }
    var d = cp.createDecipheriv(config.alg, config.cryptkey, config.signature);
    var e = d.update(text.slice(config.header.length), 'binary', 'utf8');
    if (text.slice(0, config.header.length) == config.header) {
        e += d.final('utf8');
        return e;
    } else {
        return {
            code: "5689",
            message: "Cannot Open Database File"
        };
    }
}

function T_24(length) {
    this.length = length;
    var chars = '0123456789abcdefg_hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function CI_016(file, data) {
    try {
        filesystem.writeFileSync(file, data);
        return true;
    } catch (error) {
        return false;
    }
}

function CI_015(file, charSet) {
    if (filesystem.existsSync(file)) {
        return filesystem.readFileSync(file, charSet);
    } else {
        return {
            code: "3",
            message: "Cannot Open File"
        };
    }
}

function CR_0125(dir, file, ext) {
    if (filesystem.existsSync(path.join(dir, file + ext))) {
        filesystem.unlinkSync(path.join(dir, file + ext));
    } else {
        return false;
    }
    return true;
}

function CR_0124(dbname) {
    var self = arguments.callee
    if (filesystem.existsSync(dbname)) {
        filesystem.readdirSync(dbname).forEach(function (file) {
            let C = path.join(dbname, file);
            if (filesystem.statSync(C).isDirectory()) {
                self(C)
            } else {
                filesystem.unlinkSync(C)
            }
        })
        filesystem.rmdirSync(path.join(dbname));
        return true;
    }
}

function LR_13(dir) {
    var result = [];
    filesystem.readdirSync(dir).forEach(file => {
        var stats = filesystem.statSync(dir + file);
        if (stats.isDirectory()) {
            result.push(file)
        }
    })
    return result;
}

function LR_12(dir) {
    var result = [];
    if (LC_42(dir)) {
        filesystem.readdirSync(dir).forEach(file => {
            var getExt = file.substring(file.length + 1, file.lastIndexOf(".")).toLowerCase();
            if (getExt == config.ext) {
                var getname = file.match(/([^\\/]+?)(?:\.[^\.\\/]*)?$/)[1];
                result.push(getname);
            }
        })
        return result;
    } else {
        return handling.Error("w0xjs07", "file");
    }
}

function CR_0123(dir) {
    filesystem.mkdirSync(dir);
    return true;
}

function LC_42(file) {
    if (filesystem.existsSync(file)) {
        return true;
    } else {
        return false;
    }
}

function RenameFile(Current, Newname) {
    if (filesystem.existsSync(Current)) {
        filesystem.renameSync(Current, Newname);
        return true;
    } else {
        return false;
    }
}

function U_541(a) {
    var s = {};
    return a.filter(function (item) {
        return s.hasOwnProperty(item) ? false : (s[item] = true)
    });
}

function trimString(s) {
    var l = 0,
        r = s.length - 1;
    while (l < s.length && s[l] == ' ') l++;
    while (r > l && s[r] == ' ') r -= 1;
    return s.substring(l, r + 1);
}

function compareObjects(o1, o2) {
    let k = '';
    for (k in o1)
        if (o1[k] != o2[k]) return false;
    for (k in o2)
        if (o1[k] != o2[k]) return false;
    return true;
}

function itemExists(Hstack, needle) {
    for (var i = 0; i < Hstack.length; i++)
        if (compareObjects(Hstack[i], needle)) return true;
    return false;
}

var TB_424 = function (params, obj) {
    return params.replace(';', '').split(obj);
};

function CB_15(data) {
    let result = true;
    KeyArr = Object.keys(data[0]);
    for (let i = 0; i < KeyArr.length; i++) {
        if (data[0][KeyArr[i]].length << 0) {
            result = false;
            break;
        }
    }
    return result;
};

function AF_90(STO, DB, oldname, newname) { //+
    let StrError = [];
    for (a in oldname) {
        var _oldname = path.join(STO, oldname[a]);
        var _newname = path.join(STO, newname[a]);
        if (LC_42(_oldname)) {} else {
            StrError.push(oldname[a]);
        }
    }
    return [StrError.length, StrError];
}

function AF_89(STO, DB, oldname, newname) { //+
    for (a in oldname) {
        var _oldname = path.join(STO, oldname[a]);
        var _newname = path.join(STO, newname[a]);
        var Result = RenameFile(_oldname, _newname);
    }
    return true;
}

function AF_88(STO, DB, oldname, newname) { //+
    let StrError = [];
    for (a in oldname) {
        var _oldname = path.join(STO, DB, oldname[a] + config.ext);
        var _newname = path.join(STO, DB, newname[a] + config.ext);
        if (LC_42(_oldname)) {} else {
            StrError.push(oldname[a]);
        }
    }
    return [StrError.length, StrError];
}

function AF_87(STO, DB, oldname, newname) { //+
    for (a in oldname) {
        var _oldname = path.join(STO, DB, oldname[a] + config.ext);
        var _newname = path.join(STO, DB, newname[a] + config.ext);
        var _r = RenameFile(_oldname, _newname);
    }
    return true;
}

function CB_16(db) {
    let status = [];
    try {
        var keys = Object.keys(db[0]);
        keys.forEach(col => {
            if (typeof db[0][col] !== 'undefined') {
                if (db[0][col] === '') {
                    if (db.length < 2) {} else {
                        status.push(col);
                    }
                } else {
                    status.push(col);
                }
            }
        });
    } catch (error) {
        status.push(error);
    }
    return status.length < 1 ? false : true;
}

function CF_875(toSearch, objects, arr) { //+
    let results = [];
    let StrError = [];
    toSearch = trimString(toSearch);
    for (var i = 0; i < objects.length; i++) {
        for (var h = 0; h < arr.length; h++) {
            if (typeof objects[i][arr[h]] !== 'undefined') {
                if (objects[i][arr[h]].indexOf(toSearch) != -1) {
                    if (!itemExists(results, objects[i])) results.push(objects[i]);
                }
            } else {
                StrError.push(arr[h]);
            }
        }
    }

    if (StrError.length == 0) {
        return results;
    } else {
        return handling.Error("e0xjm05", JSON.stringify(U_541(StrError)))
    }

}

function CF_874(STO, db, column) { //+
    Object.keys(db).forEach(function (key) {
        for (a in column) {
            db[key][column[a]] = "null";
        }
    });
    var _ex = enc(JSON.stringify(db));
    CI_016(STO, _ex);
    return true;
}

function CF_873(toSearch, objects, arr) { //+
    var results = [];
    toSearch = trimString(toSearch);
    for (var i = 0; i < objects.length; i++) {
        for (var h = 0; h < arr.length; h++) {
            if (objects[i][arr[h]] == toSearch) {
                if (!itemExists(results, objects[i])) results.push(objects[i]);
            }
        }
    }
    return results;
}

function CC_88(actual) { //+
    var newArray = new Array();
    for (var i = 0; i < actual.length; i++) {
        if (actual[i]) {
            newArray.push(actual[i]);
        }
    }
    return newArray;
}

function CC_87(db, column) { //+
    var RESULT = [];
    Object.keys(db).forEach(function (key) {
        for (a in column) {
            if (typeof db[key][column[a]] !== 'undefined') {
                RESULT.push(column[a]);
            }
        }
    });
    return [RESULT.length, U_541(RESULT)];
}

function strparse(_string) {
    return JSON.parse(_string);
}

function strstringify(_string) {
    return JSON.stringify(_string);
}

module.exports = {
    TableEmpty: CB_16,
    UniqArr: U_541,
    Setting: config,
    ColumnBuilder: CB_15,
    FolderExist: AF_90,
    CreatTFolder: AF_89,
    TableExist: AF_88,
    CreateTable: AF_87,
    FindLikeFunction: CF_875,
    AddTCol: CF_874,
    FindQueryStr: CF_873,
    BuildArr: CC_88,
    ColExt: CC_87,
    BuildQuery: TB_424,
    Token: T_24,
    Check: LC_42,
    encrypt: enc,
    decrypt: dec,
    ExportFile: CI_016,
    ImportFile: CI_015,
    List: LR_13,
    ListTBL: LR_12,
    CreateDB: CR_0123,
    DeleteDB: CR_0124,
    DeleteTBL: CR_0125,
    parse: strparse,
    stringify: strstringify
}