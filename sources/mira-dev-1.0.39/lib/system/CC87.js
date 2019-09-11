module.exports = function (DB, COL) {
    // Check Objcet Property Key
    var RESULT = [];
        Object.keys(DB).forEach(function (k) {
            for (const a in COL) {
                if (typeof DB[k][COL[a]] !== 'undefined') {
                    RESULT.push(COL[a]);
                }
            }
        });
    return [RESULT.length, require('./UF50')(RESULT)];
};