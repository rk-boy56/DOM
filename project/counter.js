let h1 = document.getElementById('count');
let count = 0;
function incrg(){
    count++;
    h1.innerHTML = count;
}

function dcrg(){
    count--;
    h1.innerHTML = count;
}

function reset(){
    count = 0;
    h1.innerHTML = count;
}

function save(){
    localStorage.setItem("value", count);
}

function load(){
    count = localStorage.getItem("value")
    h1.innerHTML = count;
}