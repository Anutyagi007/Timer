const startingMinutes=10;
let time=startingMinutes*60;
const timer=document.querySelector("h1")

setInterval(updateCount,1000)
function updateCount(){
    const minutes=Math.floor(time/60);
    let seconds=time%60;
    seconds=seconds<10?"0"+seconds:seconds;
    timer.innerHTML=`${minutes}:${seconds}`;
    time--;
}