module.exports = function (ARR) {
    // Set Objcet Property
    var OBJ = {};
        return ARR.filter(function (i) { return OBJ.hasOwnProperty(i) ? false : (OBJ[i] = true); });
};