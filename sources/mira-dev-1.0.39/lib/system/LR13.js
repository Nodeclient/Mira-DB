module.exports = function (DIR) {
    // List Objcet Property Keys
    var CON = require('./tool/CONFIG')();
        var LIST_RESULT = [];
            if (require('./LC42')(DIR)) {
                        require('fs').readdirSync(DIR).forEach(FL => {
                            var CHK_EXT = FL.substring(FL.length + 1, FL.lastIndexOf(".")).toLowerCase();
                            if (CHK_EXT == CON.ext) {
                                var GET_NAME = FL.match(/([^\\/]+?)(?:\.[^\.\\/]*)?$/)[1];
                                    LIST_RESULT.push(GET_NAME);
                            }
                        });
                    return LIST_RESULT;
                } else {
                    return require('../error_handling').Error("w0xjs07", ["FILE"]);
            }
};