module.exports = function (L) {
    // Set Token Property
    L = (typeof L =="undefined") ? 16 :L;
        let CHR = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',R = '';
    for (var i = L; i > 0; --i)
        if(i=== (L-6) ){ R += "_" }else{ R += CHR[Math.floor(Math.random() * CHR.length)]}
    return R;
};