module.exports = function () {
    const TB_TAG =  /COLUMN[ ]+(.*?)[ ]+TABLE[ ]+(.*\S+\w+)/ig; 
        return TB_TAG;
};