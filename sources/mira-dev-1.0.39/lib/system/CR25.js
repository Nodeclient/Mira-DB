module.exports = function (DIR, FL, EX) {
    // Set Objcet Property
    if ( require('fs').existsSync( require('path').join(DIR, FL + EX)) ) {
            require('fs').unlinkSync( require('path').join(DIR, FL + EX) );
        } else {
            return false;
    }
    return true;
};