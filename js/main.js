/** fieldCount must be from 10 to 90*/
const fieldCount = 20;
createTable(fieldCount);

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);

let interval;

function start() {
    interval = setInterval(function () {
        showGeneration(fieldCount);
        makeNextGeneration(fieldCount);
    }, 200);
}

function stop() {
    clearInterval(interval);
}