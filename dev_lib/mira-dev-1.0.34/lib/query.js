/*
    Mira-db 
    https://www.npmjs.com/package/mira-db
*/

var mdb = require('./functions');
var handling = require('./error_handling');
var path = require('path');
var { output, queryupdatetable, querycreatetable, querydeleterow, querydeletecol, queryrenamecol, queryaddrow, queryselectlimit, queryselecttablecol, queryunique } = require('./classes');
class QueryFunction {

    CREATE_DATABASE(sto, db, callback) {
        if (mdb.Check(sto)) {
            callback(handling.Error("w0xjs03", db), false);
        } else {
            mdb.CreateDB(sto);
            callback(false, true);
        }
    }

    DROP_TABLE(dir, tbl, ext, callback) {
        const str = new output(mdb.DeleteTBL(dir, tbl, ext));
        if (str.out) {
            callback(true);
        } else {
            callback(handling.Error("e0xje213", tbl));
        }
    }

    DROP_DATABASE(dir, val, callback) {
        const str = new output(mdb.DeleteDB(dir));
        if (str.out) {
            callback(_RESULT);
        } else {
            callback(handling.Error("e0xje213", val));
        }
    }

    LIST_DATABSE(db, callback) {
        callback(mdb.List(db), true);
    }

    LIST_TABLE(db, callback) {
        callback(mdb.ListTBL(db), true);
    }

    UPDATE_TABLE(STO, db, column, value, find, callback) {
        const str = new queryupdatetable([], [], false, null);
        Object.keys(db).forEach(function (key) {
            if (db[key][find[0]] == find[1]) {
                for (let i = 0; i < column.length; i++) {
                    if (typeof value[i] == 'undefined') {
                        str.res.push(column[i]);
                    } else {
                        if (typeof db[key][column[i]] !== 'undefined') {
                            db[key][column[i]] = value[i];
                        } else {
                            str.col.push(column[i]);
                        }
                    }
                }
                str.str = true;
            }
        });
        if (str.res.length == 0) {
            if (str.col.length == 0) {
                if (str.str) {
                    var _UPDATE_TABLE = mdb.encrypt(mdb.stringify(db));
                    mdb.ExportFile(STO, _UPDATE_TABLE);
                    callback(true);
                } else {
                    callback(handling.Error("e0xjm01", find[1]));
                }
            } else {
                callback(handling.Error("e0xjm05", mdb.stringify(mdb.UniqArr(str.col))));
            }
        } else {
            callback(handling.Error("e0xjm04", mdb.stringify(mdb.UniqArr(str.res))));
        }
    }

    CREATE_TABLE(sto, tbl, column, value, callback) {
        const str = new querycreatetable(0, [], {}, path.join(sto, tbl + mdb.Setting.ext), null);
        if (mdb.Check(str.fil)) {
            str.res = false;
        } else {
            column.forEach(function (obj) {
                if (typeof value[str.inv] == 'undefined') value[str.inv] = null;
                str.tbl[obj] = value[str.inv];
                str.inv++;
            });
            str.col.push(str.tbl)
            var _CREATE_TABLE = mdb.encrypt(mdb.stringify(str.col));
            mdb.ExportFile(str.fil, _CREATE_TABLE);
            str.res = true;
        }
        if (str.res) {
            callback(true);
        } else {
            callback(handling.Error("w0xjs06", tbl));
        }
    }

    DELETE_ROW_INDEX(STO, db, value, tbl_name) {
        const str = new querydeleterow(null, mdb.TableEmpty(db));
        if (db.length < 2) {
            var keys = Object.keys(db[0]);
            keys.forEach(function (p) {
                db[0][p] = "";
                str.sta = true;
            });
        } else {
            Object.keys(db).forEach(function (key) {
                if (key == value - 1) {
                    delete db[key];
                    str.sta = true;
                }
            });
        }
        if (str.sta == null) {
            return handling.Error("e0xjm041", value);
        } else if (str.sta) {
            if (str.res) {
                var _DELETE_ROW_INDEX = mdb.encrypt(mdb.stringify(mdb.BuildArr(db)));
                mdb.ExportFile(STO, _DELETE_ROW_INDEX);
                return true;
            } else {
                return handling.Error("e0xjm041a", tbl_name);
            }
        }
    }

    DELETE_ROW(STO, db, column, value) {
        const str = new querydeleterow(null, null);
        if (db.length < 2) {
            var keys = Object.keys(db[0]);
            keys.forEach(function (p) {
                db[0][p] = "";
                str.sta = true;
            });
        } else {
            Object.keys(db).forEach(function (key) {
                if (typeof db[key][column] == 'undefined') {
                    str.sta = false;
                } else {
                    if (db[key][column].indexOf(value[0]) == 0) {
                        delete db[key];
                        str.sta = true;
                    }
                }
            });
        }
        if (str.sta == null) {
            return handling.Error("e0xjm01", value[0]);
        } else if (str.sta == false) {
            return handling.Error("e0xjm02", column);
        } else if (str.sta) {
            var _DELETE_ROW = mdb.encrypt(mdb.stringify(mdb.BuildArr(db)));
            mdb.ExportFile(STO, _DELETE_ROW);
            return true;
        }
    }

    DELETE_COLUMN(STO, db, column, callback) {
        const str = new querydeletecol([], [], Object.keys(db[0]));
        Object.keys(db).forEach(function (key) {
            column.forEach(element => {
                if (typeof db[key][element] !== 'undefined') {
                    if (str.obj.length < 2) {
                        str.key.push(str.obj);
                    } else {
                        delete db[key][element];
                    }
                } else {
                    str.col.push(element);
                }
            });
        });
        if (str.col.length == 0) {
            if (str.key.length == 0) {
                var vf = mdb.encrypt(mdb.stringify(mdb.BuildArr(db)));
                mdb.ExportFile(STO, vf)
                callback(true);
            } else {
                callback(handling.Error("e0xje02a",mdb.stringify(str.obj)));
            }
        } else {
            callback(handling.Error("e0xjm02", mdb.stringify(mdb.UniqArr(str.col))));
        }
    }

    RENAME_COLUMN(STO, db, oldName, newName, callback) {
        const str = new queryrenamecol([], [], db);
        Object.keys(db).forEach(function (a) {
            Object.keys(oldName).forEach(function (b) {
                if (typeof db[a][oldName[b]] !== 'undefined') {
                    if (typeof newName[b] !== 'undefined') {
                        str.obj = mdb.parse(mdb.stringify(str.obj).replace(new RegExp('"' + oldName[b] + '":', 'g'), '"' + newName[b] + '":'));
                    } else {
                        str.str.push(oldName[b]);
                    }
                } else {
                    str.col.push(oldName[b]);
                }
            });
        });
        if (str.str.length == 0) {
            if (str.col.length == 0) {
                var vf = mdb.encrypt(mdb.stringify(mdb.BuildArr(str.obj)));
                mdb.ExportFile(STO, vf)
                callback(true);
            } else {
                callback(handling.Error("e0xjm05", mdb.stringify(mdb.UniqArr(str.col))));
            }
        } else {
            callback(handling.Error("e0xjm04",mdb.stringify(mdb.UniqArr(str.str))));
        }
    }

    RENAME_TABLE(STO, DB, oldname, newname, callback) {
        const str = new output(mdb.TableExist(STO, DB, oldname, newname));
        if (str.out[0] == 0) {
            callback(mdb.CreateTable(STO, DB, oldname, newname));
        } else {
            callback(handling.Error("e0xjm06", mdb.stringify(str.out[1])));
        }
    }

    RENAME_DATABASE(STO, DB, oldname, newname, callback) {
        const str = new output(mdb.FolderExist(STO, DB, oldname, newname));
        if (str.out[0] == 0) {
            callback(mdb.CreatTFolder(STO, DB, oldname, newname));
        } else {
            callback(handling.Error("e0xjm07", mdb.stringify(str.out[1])));
        }
    }

    ADD_COLUMN(STO, db, column, callback) {
        const str = new output(mdb.ColExt(db, column));
        if (str.out[0] == 0) {
            callback(mdb.AddTCol(STO, db, column));
        } else {
            callback(handling.Error("w0xjs06",mdb.stringify(str.out[1])));
        }
    }

    ADD_ROW(STO, db, column, value, callback) {
        const str = new queryaddrow({}, []);
        if (Array.isArray(column) && Array.isArray(value)) {
            for (var key in db[0]) {
                str.dat[key] = "null";
                for (var c in column) {
                    if (typeof db[0][column[c]] !== "undefined") {
                        if (key == column[c]) {
                            if (typeof value[c] == "undefined") {
                                str.dat[column[c]] = "null";
                            } else {
                                str.dat[column[c]] = value[c];
                            }
                        }
                    } else {
                        str.res.push(column[c])
                    }
                }
            }
            if (str.res.length == 0) {
                db.push(str.dat);
                var vf = mdb.encrypt(mdb.stringify(db));
                mdb.ExportFile(STO, vf);
                if (mdb.ColumnBuilder(db)) {
                    DELETE_ROW_INDEX(STO, db, 1);
                }
                callback(false, true);
            } else {
                callback(handling.Error("e0xjm05",mdb.stringify(mdb.UniqArr(str.res))));
            }
        } else {
            callback(handling.Error("e0xjm03", "ARRAY"), null);
        }
    }

    SELECT_TABLE_FIND_LIKE(db, value, arr, callback) {
        callback(mdb.FindLikeFunction(value[0], db, arr));
    }

    SELECT_TABLE_FIND(db, value, arr, callback) {
        callback(mdb.FindQueryStr(value[0], db, arr));
    }

    SELECT_LIMIT(db, column, callback) {
        const str = new queryselectlimit([], [], column[0] < 1 ? 1 : column[0], column[1] < 1 ? 1 : column[1]);
        for (let index = str.num1 - 1; index < str.num2; index++) {
            if (typeof db[index] == "undefined") {
                str.res.push(index)
            } else {
                str.dat.push(db[index]);
            }
        }
        if (str.res.length == 0) {
            callback(str.dat);
        } else {
            callback(handling.Error("e0xjm041",mdb.stringify(mdb.UniqArr(str.res))));
        }
    }

    SELECT_TABLE_COLUMN(db, column, callback) {
        const str = new queryselecttablecol([], []);
        Object.keys(db).forEach(function (key) {
            var result = {};
            column.forEach(a => {
                if (typeof db[key][a] !== "undefined") {
                    result[a] = db[key][a];
                } else {
                    str.col.push(a);
                }
            });
            str.dat.push(result);
        });
        if (str.col.length == 0) {
            callback(str.dat);
        } else {
            callback(handling.Error("e0xjm05", mdb.stringify(mdb.UniqArr(str.col))));
        }
    }

    SELECT_TABLE(db, callback) {
        const str = new output([]);
        Object.keys(db).forEach(function (key) {
            if (db[key] != null) {
                str.out.push(db[key]);
            }
        });
        callback(str.out);
    }

    UNIQUE(array, col, callback) {
        const str = new queryunique([], []);
        for (var i = array.length - 1; i >= 0; i--) {
            if (typeof array[i][col] == "undefined") {
                str.arr.push(col);
            }
            if (str.dat.indexOf(array[i][col]) < 0) {
                str.dat.push(array[i][col]);
            } else {
                array.splice(i, 1);
            }
        }
        if (str.arr.length == 0) {
            callback(array);
        } else {
            callback(handling.Error("e0xjm05", "ERROR"));
        }
    }

} module.exports = new QueryFunction();