const startBtn =  document.querySelector('#start');
const stopBtn =  document.querySelector('#stop');
const resetBtn =  document.querySelector('#reset');

const hrInput = document.querySelector('#hr');
const minInput = document.querySelector('#min');
const secInput = document.querySelector('#sec');    

startBtn.addEventListener("click",()=>{
    console.log("timer started");
    let hr = parseInt(hrInput.value)  || 0;
    let min = parseInt(minInput.value) || 0;
    let sec = parseInt(secInput.value) || 0;
    console.log(hrInput.value, minInput.value, secInput.value);
    let totalSecconds = (hr*3600)+(min*60)+sec;
    timer(totalSecconds);

})
let timerId = null;
let isStopped = false;

stopBtn.addEventListener("click", () => {
    console.log("timer stopped");
    isStopped = true;
    if (timerId) {
        clearTimeout(timerId);
        timerId = null;
    }
});

resetBtn.addEventListener("click", () => {
    console.log("timer reset");
    isStopped = true;
    if (timerId) {
        clearTimeout(timerId);
        timerId = null;
    }
    hrInput.value = "00";
    minInput.value = "00";
    secInput.value = "00";
});

function timer(countSeconds) {
    if (isStopped) {
        isStopped = false;
        return;
    }
    console.log(countSeconds);
    changeInputValue(countSeconds);

    if (countSeconds === 0) {
        return;
    }
    countSeconds--;
    timerId = setTimeout(() => {
        timer(countSeconds);
    }, 1000);
}
function changeInputValue(countSeconds){
    const hr = Math.floor(countSeconds / 3600);
    const min = Math.floor((countSeconds % 3600) / 60);
    const sec = countSeconds % 60;
    hrInput.value = hr < 10 ? `0${hr}` : hr;
    minInput.value = min < 10 ? `0${min}` : min;
    secInput.value = sec < 10 ? `0${sec}` : sec;
    
}
