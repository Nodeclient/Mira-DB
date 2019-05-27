/*
    Mira-db 
    https://www.npmjs.com/package/mira-db
*/

class miraconfig {
    constructor(_S, _C, _D, _P) {
        this.Storage = _S;
        this.CharSet = _C;
        this.Permission = _D;
        this.DB = _P;
    }
}

class datastring {
    constructor(_F,_T, _C, _V, _S,_D) {
        this.dbf = _F;
        this.tbl = _T;
        this.col = _C;
        this.val = _V;
        this.str = _S;
        this.dir = _D;
    }
}

class output {
    constructor(_O) {
        this.out = _O;
    }
}

module.exports = {
    output,
    miraconfig,
    datastring
};