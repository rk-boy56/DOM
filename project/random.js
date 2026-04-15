function random(){
    let color = '#';
    let hex = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor = color;
}
let time = setInterval(() => random(), 1500)