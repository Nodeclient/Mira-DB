module.exports = function (DB) {
    // Set Objcet Property
    var SELF = arguments.callee;
        if ( require('fs').existsSync(DB) ) {
                    require('fs').readdirSync(DB).forEach(function (FL) {
                        let C = require('path').join(DB, FL);
                            if ( require('fs').statSync(C).isDirectory() ) {
                                SELF(C);
                            } else {
                                require('fs').unlinkSync(C);
                            }
                    });
                require('fs').rmdirSync(require('path').join(DB));
            return true;
        }
};