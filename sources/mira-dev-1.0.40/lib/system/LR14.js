module.exports = function (DIR) {
    // Set Objcet Property
    var CUR = [];
        require('fs').readdirSync(DIR).forEach(FL => {
            var DB_KEY = require('fs').statSync(DIR + FL);
                if (DB_KEY.isDirectory()) {
                    CUR.push(FL);
                }
        });
    return CUR;
};