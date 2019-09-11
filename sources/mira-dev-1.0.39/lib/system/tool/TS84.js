module.exports = function (CUR) {
    // TRIM
    var L = 0, R = CUR.length - 1;
        while (L < CUR.length && CUR[L] == ' ') L++;
            while (R > L && CUR[R] == ' ') R -= 1;
                return CUR.substring(L, R + 1);
};