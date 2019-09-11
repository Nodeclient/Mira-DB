module.exports = function () {
    const TB_TAG = /COLUMN[ ]+(.*?)[ ]+TABLE[ ]+(.*\S+\w+)[ ]+VALUE(.*?)[ ]+/gi;
        return TB_TAG;
};