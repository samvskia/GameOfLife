function createTable(fieldCount) {
    let table = document.getElementById("table");

    let iStr, jStr;
    for (let i = 1; i < fieldCount + 1; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j < fieldCount + 1; j++) {
            let td = document.createElement("td");

            if (i.toString().length === 1) {
                iStr = "0" + i;
            } else {
                iStr = i.toString();
            }
            if (j.toString().length === 1) {
                jStr = "0" + j;
            } else {
                jStr = j.toString();
            }

            td.setAttribute("id", iStr + "x" + jStr);

            if (createFirstGeneration(i, j)) {
                td.setAttribute("live", "true");
            } else {
                td.setAttribute("live", "false");
            }
            td.setAttribute("livingNeighbors", "0");

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function createFirstGeneration(i, j) {
    if (i === 4 && (j === 2 || j === 3 || j === 4) || i === 3 && j === 4 || i === 2 && j === 3) {
        return true;
    }
    return false;
}

function showGeneration(fieldCount) {
    let id, elem;

    for (let i = 1; i < fieldCount + 1; i++) {
        for (let j = 1; j < fieldCount + 1; j++) {
            if (i.toString().length === 1) {
                i = "0" + i;
            } else {
                i = i.toString();
            }
            if (j.toString().length === 1) {
                j = "0" + j;
            } else {
                i = i.toString();
            }

            id = i + "x" + j;
            countLivingNeighbors(id, fieldCount);
            elem = document.getElementById(id);

            if (elem.getAttribute("live") === "true") {
                elem.classList.add("live");
            } else {
                elem.classList.remove("live");
            }
        }
    }


}

function countLivingNeighbors(id, fieldCount) {
    let i = parseInt(id.slice(0, 2));
    let j = parseInt(id.slice(-2));
    let neighbors = [];

    neighbors[0] = getNeighbor0(i, j, fieldCount);
    neighbors[1] = getNeighbor1(i, j, fieldCount);
    neighbors[2] = getNeighbor2(i, j, fieldCount);
    neighbors[3] = getNeighbor3(i, j, fieldCount);
    neighbors[4] = getNeighbor4(i, j, fieldCount);
    neighbors[5] = getNeighbor5(i, j, fieldCount);
    neighbors[6] = getNeighbor6(i, j, fieldCount);
    neighbors[7] = getNeighbor7(i, j, fieldCount);

    console.log(id);
    console.log(neighbors);

    let liveSum = 0;
    for (let i = 0; i < 8; i++) {
        neighbors[i] = document.getElementById(neighbors[i]);
        if (neighbors[i]) {
            if (neighbors[i].getAttribute("live") === "true") {
                liveSum++;
            }
        }
    }

    let elem = document.getElementById(id);
    elem.setAttribute("livingNeighbors", liveSum.toString());
}

function makeNextGeneration(fieldCount) {
    let elem;
    let liveSum = 0;
    for (let i = 1; i < fieldCount + 1; i++) {
        for (let j = 1; j < fieldCount + 1; j++) {
            if (i.toString().length === 1) {
                i = "0" + i;
            } else {
                i = i.toString();
            }
            if (j.toString().length === 1) {
                j = "0" + j;
            } else {
                i = i.toString();
            }

            elem = document.getElementById(i + "x" + j);
            liveSum = parseInt(elem.getAttribute("livingNeighbors"));

            //Conway rules
            if (elem.getAttribute("live") === "true" && liveSum > 1 && liveSum < 4) {
                elem.setAttribute("live", "true");
            } else if (elem.getAttribute("live") === "false" && liveSum === 3) {
                elem.setAttribute("live", "true");
            } else {
                elem.setAttribute("live", "false");
            }
        }
    }
}