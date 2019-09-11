module.exports = function (STO, DB, OLD_NAME, NEW_NAME) {
    // IF EXISTS Table Objcet
    var SET_ERR = [];
    var CON = require('./tool/CONFIG')();
        for (const a in OLD_NAME) {
            if (require('./LC42')(require('path').join(STO, DB, OLD_NAME[a] + CON.ext))) {} else {
                SET_ERR.push(OLD_NAME[a]);
            }
        }
    return [SET_ERR.length, SET_ERR];
};