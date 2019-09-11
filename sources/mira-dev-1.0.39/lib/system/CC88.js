module.exports = function (ACT) {
    // Build Objcet Property Key
    var NW_ARR = new Array();
        for (var i = 0; i < ACT.length; i++) {
            if (ACT[i]) {
                NW_ARR.push(ACT[i]);
            }
        }
    return NW_ARR;
};