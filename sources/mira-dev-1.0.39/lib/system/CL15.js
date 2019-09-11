module.exports = function (FL, DATA_CHR) {
    // Set Objcet Property
    if (require('fs').existsSync(FL)) {
        return require('fs').readFileSync(FL, DATA_CHR);
    } else {
        return {
            code: "3",
            message: "Cannot Open File"
        };
    }
};