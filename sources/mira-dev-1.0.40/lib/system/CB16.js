module.exports = function (DB) {
    // Check Table Empty 
        let DB_KEYS = [];
            try {
                var CUR = Object.keys(DB[0]);
                    CUR.forEach(COL => {
                        if (typeof DB[0][COL] !== 'undefined') {
                            if (DB[0][COL] === '') {
                                if (DB.length < 2) {} else {
                                    DB_KEYS.push(COL);
                                }
                            } else {
                                DB_KEYS.push(COL);
                            }
                        }
                    });
            } catch (e) {
                DB_KEYS.push(e);
        }
    return DB_KEYS.length < 1 ? false : true;
};