module.exports = function (FLTXT) {
    // Set Objcet Property
    var OBJ = {};
        return FLTXT.filter(function (item) {
            return OBJ.hasOwnProperty(item) ? false : (OBJ[item] = true)
        });
};