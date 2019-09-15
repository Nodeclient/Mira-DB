/*
    Mira-db 
    https://www.npmjs.com/package/mira-db
*/
//lastupdate:09/14/2019
const tag = require("./query/register");
const mdb = require('./system');
const {
    miraconfig,
    datastring,
    output
} = require('./classes');
const handling = require('./error');
const path = require('path');
const MiraQuery = require('./query');
//lastupdate:09/14/2019
module.exports = function (_Storage, _Database, _Permission, _CharSet) {
    var _default = {
        SELECT: true,
        ADD: true,
        UNIQUE: true,
        UPDATE: true,
        RENAME: true,
        DROP: true,
        DELETE: true,
        CREATE: true,
        LIST: true
    };
var conf = new miraconfig(_Storage, _CharSet, _Permission, _Database);
    //OPEN-DB lastupdate:09/14/2019
    function OpenDB(STO, DB, TBL, CHR) {
        if (mdb.Check(STO)) {
            if (mdb.Check(path.join(STO, DB))) {
                const url = path.join(STO, DB, mdb.StrToFileName(TBL, mdb.Setting.ext));
                if (mdb.Check(url)) {
                        try {
                            var data = mdb.decrypt(mdb.ImportFile(url, CHR));
                                var check = mdb.parse(data);
                                    return ["0", data];
                        } catch (e) {
                                return handling.Error("e0xtm01", [mdb.Setting.signature]);
                        }
                } else {
                    return handling.Error("e0xje06", [TBL]);
                }
            } else {
                return handling.Error("e0xje213", [DB]);
            }
        } else {
            return handling.Error("e0xje13", [STO]);
        }
    }
    //QUERY lastupdate:09/14/2019
    function Query(CMD, DB, PERM, callback) {
        try {
            PERM = (typeof PERM !== 'undefined') ? PERM : _default;
            CMD = (typeof CMD !== 'undefined') ? CMD : "null";
            var J_STRING = String(CMD).toLowerCase().match(tag.TAG);
     
            switch (J_STRING[0].toLowerCase()) {
                case "unique":
                    //UNIQUE lastupdate:09/14/2019
                    if (PERM.UNIQUE) {
                        if (J_STRING.indexOf("column") > -1 && J_STRING.indexOf("table") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.UNIQUE_COL));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[2], conf.CharSet), null, null, null, null, null);
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.UNIQUE(mdb.parse(tmp.dbf[1]), str.out[1], function (data) {
                                    tmp.dbf = data;
                                });
                            }
                            return tmp.dbf;
                        }
                        return handling.Error("e0xje02", ["UNIQUE"]);
                    } else {
                        return handling.Error("e0xje14", ["UNIQUE"]);
                    }
                    break;
                case "update":
                    if (PERM.UPDATE) {
                        //UPDATE lastupdate:09/14/2019
                        if (J_STRING.indexOf("value") > -1 && J_STRING.indexOf("find") > -1 && J_STRING.indexOf("column") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.UPDATE_ROW));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[1], conf.CharSet), null, mdb.parse(str.out[2]), mdb.parse(str.out[3]), mdb.parse(str.out[5]), null);
                            var fileJQL = path.join(conf.Storage, DB, mdb.StrToFileName(str.out[1], mdb.Setting.ext));
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.UPDATE_TABLE(fileJQL, mdb.parse(tmp.dbf[1]), tmp.col, tmp.val, tmp.str, function (data) {
                                    tmp.dbf = data;
                                });
                            }
                            return tmp.dbf;
                        }
                        return handling.Error("e0xje02", ["UPDATE"]);
                    } else {
                        return handling.Error("e0xje14", ["UPDATE"]);
                    }
                    break;
                case "list":
                    if (PERM.LIST) {
                        //LIST lastupdate:09/14/2019
                        if (J_STRING.indexOf("list") > -1 && J_STRING.indexOf("table") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.LIST_TABLE));
                            MiraQuery.LIST_TABLE(path.join(conf.Storage, str.out[1]), function (result) {
                                str.out = result;
                            });
                            return str.out;
                        }
                        if (J_STRING.indexOf("list") > -1 && J_STRING.indexOf("database") > -1) {
                            const tmp = new datastring(null, null, null, null, null, null);
                            MiraQuery.LIST_DATABSE(path.join(conf.Storage, "/"), function (result, data) {
                                tmp.dbf = result;
                            });
                            return tmp.dbf;
                        }
                        return handling.Error("e0xje02", ["LIST"]);
                    } else {
                        return handling.Error("e0xje14", ["LIST"]);
                    }
                    break;
                case "drop":
                    if (PERM.DROP) {
                        //DROP TABLE lastupdate:09/14/2019
                        if (J_STRING.indexOf("drop") > -1 && J_STRING.indexOf("table") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.DROP_TABLE));
                            const tmp = new datastring(null, null, null, null, str.out[1], path.join(conf.Storage, DB));
                            MiraQuery.DROP_TABLE(tmp.dir, tmp.str, mdb.Setting.ext, function (result) {
                                tmp.dbf = result;
                            });
                            return tmp.dbf;
                        }
                        //DROP DB lastupdate:09/14/2019
                        if (J_STRING.indexOf("drop") > -1 && J_STRING.indexOf("database") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.DROP_DATABASE));
                            const tmp = new datastring(null, null, null, null, str.out[1], path.join(conf.Storage, str.out[1]));
                            MiraQuery.DROP_DATABASE(tmp.dir, tmp.str, function (result) {
                                tmp.dbf = result;
                            });
                            return tmp.dbf;
                        }
                        return handling.Error("e0xje02", ["DROP"]);
                    } else {
                        return handling.Error("e0xje14", ["DROP"]);
                    }
                    break;
                case "create":
                    if (PERM.CREATE) {
                        //CREATE TABLE  lastupdate:09/14/2019
                        if (J_STRING.indexOf("create") > -1 && J_STRING.indexOf("table") > -1 && J_STRING.indexOf("column") > -1 && J_STRING.indexOf("value") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.CREATE_TABLE));
                            const tmp = new datastring(null, str.out[1], mdb.parse(str.out[2]), mdb.parse(str.out[4]), null, path.join(conf.Storage, DB));
                            MiraQuery.CREATE_TABLE(tmp.dir, tmp.tbl, tmp.col, tmp.val, function (result) {
                                tmp.dbf = result;
                            });
                            return tmp.dbf;
                        }
                        //CREATE DB  lastupdate:09/14/2019
                        if (J_STRING.indexOf("create") > -1 && J_STRING.indexOf("database") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.CREATE_DATABASE));
                            const tmp = new datastring(null, null, null, str.out[1], null, path.join(conf.Storage, str.out[1]));
                            MiraQuery.CREATE_DATABASE(tmp.dir, tmp.val, function (err, data) {
                                if (err) {
                                    tmp.dbf = err;
                                } else {
                                    tmp.dbf = data;
                                }
                            });
                            return tmp.dbf;
                        }
                        return handling.Error("e0xje02", ["CREATE"]);
                    } else {
                        return handling.Error("e0xje14", ["CREATE"]);
                    }
                    break;
                case "delete":
                    if (PERM.DELETE) {
                        //DELETE COLUMN  lastupdate:09/14/2019
                        if (J_STRING.indexOf("delete") > -1 && J_STRING.indexOf("column") > -1 && J_STRING.indexOf("table") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.DELETE_COLUMN));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[2], conf.CharSet), null, mdb.parse(str.out[1]), null, null, path.join(conf.Storage, DB, mdb.StrToFileName(str.out[2], mdb.Setting.ext)));
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.DELETE_COLUMN(tmp.dir, mdb.parse(tmp.dbf[1]), tmp.col, function (data) {
                                    tmp.dbf = data;
                                });
                            }
                            return tmp.dbf;
                        }
                        //DELETE ROW  lastupdate:09/14/2019
                        if (J_STRING.indexOf("delete") > -1 && J_STRING.indexOf("column") > -1 && J_STRING.indexOf("row") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.DELETE_ROW));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[1], conf.CharSet), null, str.out[2], mdb.parse(str.out[4]), null, path.join(conf.Storage, DB, mdb.StrToFileName(str.out[1], mdb.Setting.ext)));
                            if (tmp.dbf[0] == 0) {
                                return MiraQuery.DELETE_ROW(tmp.dir, mdb.parse(tmp.dbf[1]), tmp.col, tmp.val);
                            }
                        }
                        //DELETE ROW INDEX lastupdate:09/14/2019
                        if (J_STRING.indexOf("delete") > -1 && J_STRING.indexOf("index") > -1 && J_STRING.indexOf("row") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.DELETE_INDEX));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[1], conf.CharSet), null, null, str.out[2], str.out[1], path.join(conf.Storage, DB, mdb.StrToFileName(str.out[1], mdb.Setting.ext)));
                            if (tmp.dbf[0] == 0) {
                                return MiraQuery.DELETE_ROW_INDEX(tmp.dir, mdb.parse(tmp.dbf[1]), tmp.val, tmp.str);
                            }
                        }
                        return handling.Error("e0xje02", ["DELETE"]);
                    } else {
                        return handling.Error("e0xje14", ["DELETE"]);
                    }
                    break;
                case "rename":
                    if (PERM.RENAME) {
                        //RENAME COLUMN NAME lastupdate:09/14/2019
                        if (J_STRING.indexOf("rename") > -1 && J_STRING.indexOf("column") > -1 && J_STRING.indexOf("table") > -1 && J_STRING.indexOf("value") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.RENAME_COLUMN));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[2], conf.CharSet), null, null, mdb.parse(str.out[1]), mdb.parse(str.out[4]), path.join(conf.Storage, DB, mdb.StrToFileName(str.out[2], mdb.Setting.ext)));
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.RENAME_COLUMN(tmp.dir, mdb.parse(tmp.dbf[1]), tmp.val, tmp.str, function (data) {
                                    tmp.dbf = data;
                                });
                            }
                            return tmp.dbf;
                        }
                        //RENAME DATABASE NAME lastupdate:09/14/2019
                        if (J_STRING.indexOf("rename") > -1 && J_STRING.indexOf("database") > -1 && J_STRING.indexOf("value") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.RENAME_DATABASE));
                            const tmp = new datastring(conf.Storage, null, null, mdb.parse(str.out[1]), mdb.parse(str.out[2]), null);
                            MiraQuery.RENAME_DATABASE(tmp.dbf, DB, tmp.val, tmp.str, function (err, data) {
                                if (!err) {
                                    tmp.dbf = data;
                                } else {
                                    tmp.dbf = err;
                                }
                            });
                            return tmp.dbf;
                        }
                        //RENAME TABLE NAME lastupdate:09/14/2019
                        if (J_STRING.indexOf("rename") > -1 && J_STRING.indexOf("table") > -1 && J_STRING.indexOf("value") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.RENAME_TABLE));
                            const tmp = new datastring(conf.Storage, null, null, mdb.parse(str.out[1]), mdb.parse(str.out[2]), null);
                            MiraQuery.RENAME_TABLE(tmp.dbf, DB, tmp.val, tmp.str, function (err, data) {
                                if (!err) {
                                    tmp.dbf = data;
                                } else {
                                    tmp.dbf = err;
                                }
                            });
                            return tmp.dbf;
                        }
                        return handling.Error("e0xje02", ["RENAME"]);
                    } else {
                        return handling.Error("e0xje14", ["RENAME"]);
                    }
                    break;
                case "add":
                    if (PERM.ADD) {
                        //ADD ROW  lastupdate:09/14/2019
                        if (J_STRING.indexOf("add") > -1 && J_STRING.indexOf("column") > -1 && J_STRING.indexOf("row") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.ADD_ROW));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[1], conf.CharSet), null, mdb.parse(str.out[2]), mdb.parse(str.out[4]), null, path.join(conf.Storage, DB, mdb.StrToFileName(str.out[1], mdb.Setting.ext)));
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.ADD_ROW(tmp.dir, mdb.parse(tmp.dbf[1]), tmp.col, tmp.val, str.out[1], function (err, data) {
                                    if (err) {
                                        tmp.dbf = err;
                                    } else {
                                        tmp.dbf = data;
                                    }
                                });
                            }
                            return tmp.dbf;
                        }
                        //ADD COLUMN lastupdate:05.06.2019
                        if (J_STRING.indexOf("add") > -1 && J_STRING.indexOf("column") > -1 && J_STRING.indexOf("table") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.ADD_COLUMN));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[2], conf.CharSet), null, mdb.parse(str.out[1]), null, null, path.join(conf.Storage, DB, mdb.StrToFileName(str.out[2], mdb.Setting.ext)));
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.ADD_COLUMN(tmp.dir, mdb.parse(tmp.dbf[1]), tmp.col, function (result) {
                                    tmp.dbf = result;
                                });
                            }
                            return tmp.dbf;
                        }
                        return handling.Error("e0xje02", ["ADD"]);
                    } else {
                        return handling.Error("e0xje14", ["ADD"]);
                    }
                    break;
                case "select":
                    if (PERM.SELECT) {
                        //SELECT TABLE FIND LIKE lastupdate:09/14/2019
                        if (J_STRING.indexOf("select") > -1 && J_STRING.indexOf("table") > -1 && J_STRING.indexOf("column") > -1 && J_STRING.indexOf("find") > -1 && J_STRING.indexOf("like") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.SELECT_FIND_LIKE));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[1], conf.CharSet), null, mdb.parse(str.out[2]), mdb.parse(str.out[3]), null, null);
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.SELECT_TABLE_FIND_LIKE(mdb.parse(tmp.dbf[1]), tmp.val, tmp.col, function (data) {
                                    tmp.dbf = data;
                                });
                            }
                            return tmp.dbf;
                        }
                        //SELECT TABLE FIND  lastupdate:09/14/2019
                        if (J_STRING.indexOf("select") > -1 && J_STRING.indexOf("table") > -1 && J_STRING.indexOf("column") > -1 && J_STRING.indexOf("find") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.SELECT_FIND));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[1], conf.CharSet), null, mdb.parse(str.out[2]), mdb.parse(str.out[4]), null, null);
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.SELECT_TABLE_FIND(mdb.parse(tmp.dbf[1]), tmp.val, tmp.col, function (data) {
                                    tmp.dbf = data;
                                });
                            }
                            return tmp.dbf;
                        }
                        //SELECT TABLE COLUMN  lastupdate:09/14/2019
                        if (J_STRING.indexOf("select") > -1 && J_STRING.indexOf("table") > -1 && J_STRING.indexOf("column") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.SELECT_COLUMN));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[1], conf.CharSet), null, mdb.parse(str.out[2]), null, null, null);
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.SELECT_TABLE_COLUMN(mdb.parse(tmp.dbf[1]), tmp.col, function (data) {
                                    tmp.dbf = data;
                                });
                            }
                            return tmp.dbf;
                        }
                        //SELECT TABLE LIMIT  lastupdate:09/14/2019
                        if (J_STRING.indexOf("select") > -1 && J_STRING.indexOf("table") > -1 && J_STRING.indexOf("limit") > -1) {
                            const str = new output(mdb.BuildQuery(String(CMD), tag.SELECT_LIMIT));
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out[1], conf.CharSet), null, mdb.parse(str.out[2]), null, null, null);
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.SELECT_LIMIT(mdb.parse(tmp.dbf[1]), tmp.col, function (data) {
                                    tmp.dbf = data;
                                });
                            }
                            return tmp.dbf;
                        }
                        //SELECT TABLE COUNT lastupdate:09/14/2019
                        if (J_STRING.indexOf("select") > -1 && J_STRING.indexOf("table") > -1 && J_STRING.indexOf("count") > -1) {
                            const str = new output(String(CMD).replace(tag.JS, '').split(tag.SELECT_COUNT)[1]);
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out, conf.CharSet), null, null, null, null, null);
                            if (tmp.dbf[0] == 0) {
                                tmp.dbf = mdb.parse(tmp.dbf[1]);
                            } else if (typeof tmp.dbf[0] == "undefined") {
                                return tmp.dbf["text"];
                            }
                            return [tmp.dbf.length];
                        }
                        //SELECT TABLE lastupdate:09/14/2019
                        if (J_STRING.indexOf("select") > -1 && J_STRING.indexOf("table") > -1) {
                            const str = new output(String(CMD).replace(tag.JS, '').split(tag.SELECT_TABLE)[1]);
                            const tmp = new datastring(OpenDB(conf.Storage, DB, str.out, conf.CharSet), null, null, null, null, null);
                            if (tmp.dbf[0] == 0) {
                                MiraQuery.SELECT_TABLE(mdb.parse(tmp.dbf[1]), function (data) {
                                    tmp.dbf = data;
                                });
                            }
                            return tmp.dbf;
                        }
                        return handling.Error("e0xje02", ["SELECT"]);
                    } else {
                        return handling.Error("e0xje14", ["SELECT"]);
                    }
                    break;
                default:
                    return handling.Error("e0xje02", [J_STRING[0]]);
            }
        } catch (e) {
            return handling.Error("e0xje01", [e.message]);
        }
    }
    //TOKEN FUNCTION lastupdate:09/14/2019
    this.Token = function (params) {
       return require('./system/TK24')(params)
    };
    //QUERY FUNCTION lastupdate:09/14/2019
    this.Query = function (CMD, callback) {
        if (callback) {
            callback(Query(CMD, conf.DB, conf.Permission));
        } else {
            return Query(CMD, conf.DB, conf.Permission);
        }
    }  

};
