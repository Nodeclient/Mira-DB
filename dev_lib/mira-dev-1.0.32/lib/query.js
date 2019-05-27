/*
    Mira-db 
    https://www.npmjs.com/package/mira-db
*/

var func = require('./functions');
var handling = require('./error_handling');
var path = require('path');

class QueryFunction {
    CREATE_DATABASE(sto, db, callback) {
        if (func.Check(sto)) {
            callback(handling.Error("w0xjs03", db), false);
        } else {
            func.CreateDB(sto);
            callback(false, true);
        }
    }
    DROP_TABLE(dir, tbl, ext, callback) {
        var _RESULT = func.DeleteTBL(dir, tbl, ext);
        if (_RESULT) {
            callback(true);
        } else {
            callback(handling.Error("e0xje213", tbl));
        }
    }
    DROP_DATABASE(dir, val, callback) {
        var _RESULT = func.DeleteDB(dir);
        if (_RESULT) {
            callback(_RESULT);
        } else {
            callback(handling.Error("e0xje213", val));
        }
    }
    LIST_DATABSE(db, callback) {
        callback(func.List(db), true);
    }
    LIST_TABLE(db, callback) {
        callback(func.ListTBL(db), true);
    }
    UPDATE_TABLE(STO, db, column, value, find, callback) {
        var result_err = [];
        var col_err = [];
        var str_find = false;
        Object.keys(db).forEach(function (key) {
            if (db[key][find[0]] == find[1]) {
                for (let i = 0; i < column.length; i++) {
                    if (typeof value[i] == 'undefined') {
                        result_err.push(column[i]);
                    } else {
                        if (typeof db[key][column[i]] !== 'undefined') {
                            db[key][column[i]] = value[i];
                        } else {
                            col_err.push(column[i]);
                        }
                    }
                }
                str_find = true;
            }
        });
        if (result_err.length == 0) {
            if (col_err.length == 0) {
                if (str_find) {
                    var _UPDATE_TABLE = func.encrypt(JSON.stringify(db));
                    func.ExportFile(STO, _UPDATE_TABLE);
                    callback(true);
                } else {
                    callback(handling.Error("e0xjm01", find[1]));
                }
            } else {
                callback(handling.Error("e0xjm05", JSON.stringify(func.UniqArr(col_err))));
            }
        } else {
            callback(handling.Error("e0xjm04", JSON.stringify(func.UniqArr(result_err))));
        }
    }
    CREATE_TABLE(sto, tbl, column, value, callback) {
        var i = 0;
        var _temp = [];
        var _tbl = {}
        var file = path.join(sto, tbl + func.Setting.ext);
        var result;

        if (func.Check(file)) {
            result = false;
        } else {
            column.forEach(function (obj) {
                if (typeof value[i] == 'undefined') value[i] = null;
                _tbl[obj] = value[i];
                i++;
            });
            _temp.push(_tbl)
            var _CREATE_TABLE = func.encrypt(JSON.stringify(_temp));
            func.ExportFile(file, _CREATE_TABLE);
            result = true;
        }
        if (result) {
            callback(true);
        } else {
            callback(handling.Error("w0xjs06", tbl));
        }
    }
    DELETE_ROW_INDEX(STO, db, value, tbl_name) {
        var status = null;
        var result = func.TableEmpty(db);

        if (db.length < 2) {
            var keys = Object.keys(db[0]);
            keys.forEach(function (p) {
                db[0][p] = "";
                status = true;
            });
        } else {
            Object.keys(db).forEach(function (key) {
                if (key == value - 1) {
                    delete db[key];
                    status = true;
                }
            });
        }
        if (status == null) {
            return handling.Error("e0xjm041", value);
        } else if (status) {
            if (result) {
                var _DELETE_ROW_INDEX = func.encrypt(JSON.stringify(func.BuildArr(db)));
                func.ExportFile(STO, _DELETE_ROW_INDEX);
                return true;
            } else {
                return handling.Error("e0xjm041a", tbl_name);
            }
        }
    }
    DELETE_ROW(STO, db, column, value) {
        var status = null;
        if (db.length < 2) {
            var keys = Object.keys(db[0]);
            keys.forEach(function (p) {
                db[0][p] = "";
                status = true;
            });
        } else {
            Object.keys(db).forEach(function (key) {
                if (typeof db[key][column] == 'undefined') {
                    status = false;
                } else {
                    if (db[key][column].indexOf(value[0]) == 0) {
                        delete db[key];
                        status = true;
                    }
                }
            });
        }
        if (status == null) {
            return handling.Error("e0xjm01", value[0]);
        } else if (status == false) {
            return handling.Error("e0xjm02", column);
        } else if (status) {
            var _DELETE_ROW = func.encrypt(JSON.stringify(func.BuildArr(db)));
            func.ExportFile(STO, _DELETE_ROW);
            return true;
        }
    }
    DELETE_COLUMN(STO, db, column, callback) {
        var ColError = [];
        var KeyError = [];
        var keys = Object.keys(db[0]);
        Object.keys(db).forEach(function (key) {
            column.forEach(element => {
                if (typeof db[key][element] !== 'undefined') {
                    if (keys.length < 2) {
                        KeyError.push(keys);
                    } else {
                        delete db[key][element];
                    }
                } else {
                    ColError.push(element);
                }
            });
        });
        if (ColError.length == 0) {
            if (KeyError.length == 0) {
                var vf = func.encrypt(JSON.stringify(func.BuildArr(db)));
                func.ExportFile(STO, vf)
                callback(true);
            } else {
                callback(handling.Error("e0xje02a", JSON.stringify(keys)));
            }
        } else {
            callback(handling.Error("e0xjm02", JSON.stringify(func.UniqArr(ColError))));
        }
    }
    RENAME_COLUMN(STO, db, oldName, newName, callback) {
        var StrError = [];
        var ColError = [];
        var db2 = db;
        Object.keys(db).forEach(function (a) {
            Object.keys(oldName).forEach(function (b) {
                if (typeof db[a][oldName[b]] !== 'undefined') {
                    if (typeof newName[b] !== 'undefined') {
                        db2 = JSON.parse(JSON.stringify(db2).replace(new RegExp('"' + oldName[b] + '":', 'g'), '"' + newName[b] + '":'));
                    } else {
                        StrError.push(oldName[b]);
                    }
                } else {
                    ColError.push(oldName[b]);
                }
            });
        });
        if (StrError.length == 0) {
            if (ColError.length == 0) {
                var vf = func.encrypt(JSON.stringify(func.BuildArr(db2)));
                func.ExportFile(STO, vf)
                callback(true);
            } else {
                callback(handling.Error("e0xjm05", JSON.stringify(func.UniqArr(ColError))));
            }
        } else {
            callback(handling.Error("e0xjm04", JSON.stringify(func.UniqArr(StrError))));
        }
    }
    RENAME_TABLE(STO, DB, oldname, newname, callback) {
        var cot = func.TableExist(STO, DB, oldname, newname);
        if (cot[0] == 0) {
            callback(func.CreateTable(STO, DB, oldname, newname));
        } else {
            callback(handling.Error("e0xjm06", JSON.stringify(cot[1])));
        }
    }
    RENAME_DATABASE(STO, DB, oldname, newname, callback) {
        var cot = func.FolderExist(STO, DB, oldname, newname);
        if (cot[0] == 0) {
            callback(func.CreatTFolder(STO, DB, oldname, newname));
        } else {
            callback(handling.Error("e0xjm07", JSON.stringify(cot[1])));
        }
    }
    ADD_COLUMN(STO, db, column, callback) {
        var col_stat = func.ColExt(db, column);
        if (col_stat[0] == 0) {
            callback(func.AddTCol(STO, db, column));
        } else {
            callback(handling.Error("w0xjs06", JSON.stringify(col_stat[1])));
        }
    }
    ADD_ROW(STO, db, column, value, callback) {
        var data = {};
        var result_err = [];
        if (Array.isArray(column) && Array.isArray(value)) {
            for (var key in db[0]) {
                data[key] = "null";
                for (var c in column) {
                    if (typeof db[0][column[c]] !== "undefined") {
                        if (key == column[c]) {
                            if (typeof value[c] == "undefined") {
                                data[column[c]] = "null";
                            } else {
                                data[column[c]] = value[c];
                            }
                        }
                    } else {
                        result_err.push(column[c])
                    }
                }
            }
            if (result_err.length == 0) {
                db.push(data);
                var vf = func.encrypt(JSON.stringify(db));
                func.ExportFile(STO, vf);
                if (func.ColumnBuilder(db)) {
                    DELETE_ROW_INDEX(STO, db, 1);
                }
                callback(false, true);
            } else {
                callback(handling.Error("e0xjm05", JSON.stringify(func.UniqArr(result_err))));
            }
        } else {
            callback(handling.Error("e0xjm03", "ARRAY"), null);
        }
    }
    SELECT_TABLE_FIND_LIKE(db, value, arr, callback) {
        callback(func.FindLikeFunction(value[0], db, arr));
    }
    SELECT_TABLE_FIND(db, value, arr, callback) {
        callback(func.FindQueryStr(value[0], db, arr));
    }
    SELECT_LIMIT(db, column, callback) {
        var data = [];
        var result_err = [];
        var StartNumber = column[0] < 1 ? 1 : column[0];
        var StopNumber = column[1] < 1 ? 1 : column[1];
        for (let index = StartNumber - 1; index < StopNumber; index++) {
            if (typeof db[index] == "undefined") {
                result_err.push(index)
            } else {
                data.push(db[index]);
            }
        }
        if (result_err.length == 0) {
            callback(data);
        } else {
            callback(handling.Error("e0xjm041", JSON.stringify(func.UniqArr(result_err))));
        }
    }
    SELECT_TABLE_COLUMN(db, column, callback) {
        var data = [];
        var ext_column = [];
        Object.keys(db).forEach(function (key) {
            var result = {};
            column.forEach(a => {
                if (typeof db[key][a] !== "undefined") {
                    result[a] = db[key][a];
                } else {
                    ext_column.push(a);
                }
            });
            data.push(result);
        });
        if (ext_column.length == 0) {
            callback(data);
        } else {
            callback(handling.Error("e0xjm05", JSON.stringify(func.UniqArr(ext_column))));
        }

    }
    SELECT_TABLE(db, callback) {
        var data = [];
        Object.keys(db).forEach(function (key) {
            if (db[key] != null) {
                data.push(db[key]);
            }
        });
        callback(data);
    }
    UNIQUE(array, col, callback) {
        var processed = [];
        var Error_arr = [];
        for (var i = array.length - 1; i >= 0; i--) {
            if (typeof array[i][col] == "undefined") {
                Error_arr.push(col);
            }
            if (processed.indexOf(array[i][col]) < 0) {
                processed.push(array[i][col]);
            } else {
                array.splice(i, 1);
            }
        }
        if (Error_arr.length == 0) {
            callback(array);
        } else {
            callback(handling.Error("e0xjm05", "ERROR"));
        }
    }
} module.exports = new QueryFunction();