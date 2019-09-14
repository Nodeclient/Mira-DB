module.exports = function (FL, DATA_OBJ) {
    // Set Objcet Property
    try {
        require('fs').writeFileSync(FL, DATA_OBJ);
            return true;
        } catch (e) {
            return false;
    }
};