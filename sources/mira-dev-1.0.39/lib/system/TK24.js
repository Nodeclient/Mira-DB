module.exports = function (LEN) {
    // Set Token Property
    this.LEN = LEN;
        var CHR = '0123456789abcdefg_hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var RESULT = '';
                for (var i = LEN; i > 0; --i)
                    return RESULT += CHR[Math.floor(Math.random() * CHR.LEN)];
};