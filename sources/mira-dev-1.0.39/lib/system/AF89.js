module.exports = function (STO, DB, OLD_NAME, NEW_NAME) {
    // CREAT FOLDER
        for (const a in OLD_NAME) {
                if(OLD_NAME[a] == NEW_NAME[a]){
                    return   require('../error_handling').Error("e0xje16", "SAME");
                }else{
                    var DB_RESULT = require('./tool/RF50')(
                            require('path').join(STO, OLD_NAME[a]),
                            require('path').join(STO, NEW_NAME[a])
                        );
                }
        }
    return true;
};