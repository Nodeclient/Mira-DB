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
    constructor(_F, _T, _C, _V, _S, _D) {
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

class queryupdatetable {
    constructor(_R, _C, _S, _T) {
        this.res = _R;
        this.col = _C;
        this.str = _S;
        this.tbl = _T;
    }
}

class querycreatetable {
    constructor(_I, _C, _T, _F, _R) {
        this.inv = _I;
        this.col = _C;
        this.tbl = _T;
        this.fil = _F;
        this.res = _R;
    }
}

class querydeleterow {
    constructor(_S, _R) {
        this.sta = _S;
        this.res = _R;
    }
}

class querydeletecol {
    constructor(_C, _K, _O) {
        this.col = _C;
        this.key = _K;
        this.obj = _O;
    }
}

class queryrenamecol {
    constructor(_S, _C, _O) {
        this.str = _S;
        this.col = _C;
        this.obj = _O;
    }
}

class queryaddrow {
    constructor(_D, _R) {
        this.dat = _D;
        this.res = _R;
    }
}

class queryselectlimit {
    constructor(_D, _R, _N1, _N2) {
        this.dat = _D;
        this.res = _R;
        this.num1 = _N1;
        this.num2 = _N2;
    }
}

class queryselecttablecol {
    constructor(_D, _C) {
        this.dat = _D;
        this.col = _C;
    }
}

class queryunique {
    constructor(_D, _A) {
        this.dat = _D;
        this.arr = _A;
    }
}


module.exports = {
    output,miraconfig,datastring,queryupdatetable,querycreatetable,querydeleterow,querydeletecol,queryrenamecol,queryaddrow,queryselectlimit,queryselecttablecol,queryunique
};