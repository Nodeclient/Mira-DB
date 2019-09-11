module.exports = function (STO, DB, OLD_NAME, NEW_NAME) {
    // CREAT FOLDER
        for (const a in OLD_NAME) {
                var DB_RESULT = require('./tool/RF50')(require('path').join(STO, OLD_NAME[a]), require('path').join(STO, NEW_NAME[a]));
        }
    return true;
};