function getNeighbor0(i, j, fieldCount) {
    let nI, nJ;

    if ((i - 1).toString().length === 1) {

        if ((i - 1) === 0) {
            nI = fieldCount;
        } else {
            nI = "0" + (i - 1);
        }
    } else {
        nI = i - 1;
    }

    if ((j - 1).toString().length === 1) {

        if ((j - 1) === 0) {
            nJ = fieldCount;
        } else {
            nJ = "0" + (j - 1);
        }
    } else {
        nJ = j - 1;
    }

    return nI + "x" + nJ;
}

function getNeighbor1(i, j, fieldCount) {
    let nI, nJ;

    if ((i - 1).toString().length === 1) {

        if ((i - 1) === 0) {
            nI = fieldCount;
        } else {
            nI = "0" + (i - 1);
        }
    } else {
        nI = i - 1;
    }

    if (j.toString().length === 1) {
        nJ = "0" + j;
    } else {
        nJ = j;
    }

    return nI + "x" + nJ;
}

function getNeighbor2(i, j, fieldCount) {
    let nI, nJ;

    if ((i - 1).toString().length === 1) {

        if ((i - 1) === 0) {
            nI = fieldCount;
        } else {
            nI = "0" + (i - 1);
        }
    } else {
        nI = i - 1;
    }

    if ((j + 1).toString().length === 1) {
        nJ = "0" + (j + 1);
    } else {

        if (j + 1 > fieldCount) {
            nJ = "0" + (j - fieldCount + 1);
        } else {
            nJ = j + 1;
        }
    }

    return nI + "x" + nJ;
}

function getNeighbor3(i, j, fieldCount) {
    let nI, nJ;

    if (i.toString().length === 1) {
        nI = "0" + i;
    } else {
        nI = i;
    }

    if ((j - 1).toString().length === 1) {

        if ((j - 1) === 0) {
            nJ = fieldCount;
        } else {
            nJ = "0" + (j - 1);
        }
    } else {
        nJ = j - 1;
    }

    return nI + "x" + nJ;
}

function getNeighbor4(i, j, fieldCount) {
    let nI, nJ;

    if (i.toString().length === 1) {
        nI = "0" + i;
    } else {
        nI = i;
    }

    if ((j + 1).toString().length === 1) {
        nJ = "0" + (j + 1);
    } else {

        if (j + 1 > fieldCount) {
            nJ = "0" + (j - fieldCount + 1);
        } else {
            nJ = j + 1;
        }
    }

    return nI + "x" + nJ;
}

function getNeighbor5(i, j, fieldCount) {
    let nI, nJ;

    if ((i + 1).toString().length === 1) {
        nI = "0" + (i + 1);
    } else {
        if (i + 1 > fieldCount){
            nI = "0" + (i - fieldCount + 1);
        } else {
            nI = i + 1;
        }
    }

    if ((j - 1).toString().length === 1) {

        if ((j - 1) === 0) {
            nJ = fieldCount;
        } else {
            nJ = "0" + (j - 1);
        }
    } else {
        nJ = j - 1;
    }

    return nI + "x" + nJ;
}

function getNeighbor6(i, j, fieldCount) {
    let nI, nJ;

    if ((i + 1).toString().length === 1) {
        nI = "0" + (i + 1);
    } else {
        if (i + 1 > fieldCount){
            nI = "0" + (i - fieldCount + 1);
        } else {
            nI = i + 1;
        }
    }

    if (j.toString().length === 1) {
        nJ = "0" + j;
    } else {
        nJ = j;
    }

    return nI + "x" + nJ;
}

function getNeighbor7(i, j, fieldCount) {
    let nI, nJ;

    if ((i + 1).toString().length === 1) {
        nI = "0" + (i + 1);
    } else {
        if (i + 1 > fieldCount){
            nI = "0" + (i - fieldCount + 1);
        } else {
            nI = i + 1;
        }
    }

    if ((j + 1).toString().length === 1) {
        nJ = "0" + (j + 1);
    } else {

        if (j + 1 > fieldCount) {
            nJ = "0" + (j - fieldCount + 1);
        } else {
            nJ = j + 1;
        }
    }

    return nI + "x" + nJ;
}