let image = document.getElementsByClassName('slide');
let index = 0;

image[0].style.display = "block";

function showslide(){
    for(let i = 0; i < image.length; i++){
        image[i].style.display = "none";
    }
    image[index].style.display = " block";
}

function Right() {
    index++;
    if(index >= image.length){
        index = 0;
    }
    showslide();
}

function Left(){
    index--;
    if(index < 0){
        index = image.length-1
    }
    showslide();
}


setInterval(() => Right(), 3000)