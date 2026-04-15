function change(color) {
    document.querySelector('body').style.backgroundColor = color;
}

function showData() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let mlSec = date.getMilliseconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    mlSec = mlSec < 100 ? '00' + mlSec : mlSec;
    mlSec = mlSec < 10 ? '000' + mlSec : mlSec;

    document.getElementById('time').innerHTML = ` ${hours} : ${minutes} : ${seconds} : ${mlSec}`;
}
setInterval(showData, 0);


//

// let mSec = 0;
// let second = 0;
// let minute = 0;
// function Start() {
//     function time() {
//         mSec++
//         document.getElementById('ml-sec').innerHTML = mSec;

//         if (mSec == 1000) {
//             second++
//             document.getElementById('sec').innerHTML = second;
//             mSec = 0;
//             document.getElementById('ml-sec').innerHTML = mSec;
//         }

//         if (second == 60) {
//             minute++
//             document.getElementById('min').innerHTML = minute;
//             second = 0;
//             document.getElementById('sec').innerHTML = second;
//         }
//     }


//     let timer = setInterval(time, 0);
// }



// function Stop() {
//     clearInterval(timer);
// }


// function Reset() {
//     mSec = 0;
// }
let second = 0;
let minute = 0;
let hour = 0;


function update() {


    second++;

    if (second == 60) {
        minute++
    }
    if (minute == 60) {
        hour++
    }

    h = hour < 10 ? '0' + hour : hour;
    m = minute < 10 ? '0' + minute : minute;
    s = second < 10 ? '0' + second : second;

    document.getElementById('stWatch').innerHTML = `${h} : ${m} : ${s} `
}

function Start() {
    timer = setInterval(update, 1000);
}

function Stop() {
    clearInterval(timer)
}

function Reset() {
    clearInterval(timer);
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById('stWatch').innerHTML = ` 00 : 00 : 00`;
}