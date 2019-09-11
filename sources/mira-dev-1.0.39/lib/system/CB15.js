module.exports = function (DATA_OBJ) {
    // Set Objcet Column Property
    let KEY_RES = true;
            KEY_ARR = Object.keys(DATA_OBJ[0]);
                for (let i = 0; i < KEY_ARR.length; i++) {
                    if (DATA_OBJ[0][KEY_ARR[i]].length << 0) {
                            KEY_RES = false;
                        break;
                    }
                }
    return KEY_RES;
};