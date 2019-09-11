module.exports = function (STO, DB, OLD_NAME, NEW_NAME) {
    // Creat Table Objcet
    var CON = require('./tool/CONFIG')();
        for (const a in OLD_NAME) {
             var DB_RESULT = require('./UF50')( require('path').join(STO, DB, OLD_NAME[a] + CON.ext), require('path').join(STO, DB, NEW_NAME[a] + CON.ext) );
        }
    return true;
};