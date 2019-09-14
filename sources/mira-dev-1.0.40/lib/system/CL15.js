module.exports = function (FL, DATA_CHR) {
    // Set Objcet Property
    if (require('fs').existsSync(FL)) {
        return require('fs').readFileSync(FL, DATA_CHR);
    } else {
        return  require('../error_handling').Error("e0xjs171",[FL]);
    }
};