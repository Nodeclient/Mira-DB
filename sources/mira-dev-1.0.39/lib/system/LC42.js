module.exports = function (FL) {
    // Check File
    if (require('fs').existsSync(FL)) {
            return true;
        } else {
            return false;
    }
};