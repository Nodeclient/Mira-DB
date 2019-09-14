module.exports = function (STO, DB, OLD_NAME, NEW_NAME) {
    // Creat Table Objcet
    var CON = require('./tool/CONFIG')();
        for (const a in OLD_NAME) {
             var DB_RESULT = require('./tool/RF50')( 
                 require('path').join(STO, DB, String(OLD_NAME[a]).concat(CON.ext) ), 
                    require('path').join(STO, DB, String(NEW_NAME[a]).concat(CON.ext) ) 
                );
        }
    return true;
};