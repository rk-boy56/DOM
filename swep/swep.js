const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSvph8sb0mVM5ZTSfyr23HoTwQgJvM--MEQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8JQGThYdYsFnxvjWTbWKGJao6SwQxld1pw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBUQklLqk6i5pjxTBNvQPeTO7FMcky1HRGg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQplukmu7wSK_mLcCyXkRIhFQ6Cr8eQV5XA&s"
];


let index = 0;
document.getElementById('img').style.backgroundImage = "url('" + images[index] + "')";

function right() {
    index++;
    if (index >= images.length){
        index = 0
    }
    document.getElementById('img').style.backgroundImage = "url('" + images[index] + "')";
}

function left(){
    index--
    if (index < 0){
        index = 0
    }
    document.getElementById('img').style.backgroundImage = "url('" + images[index] + "')";
}
