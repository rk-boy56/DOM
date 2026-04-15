
function bg() {
    let color = document.getElementById('color').value;
    let body = document.body.style.backgroundColor = color;
    document.getElementById('btnn').style.color = "white";
    document.getElementById('btn').style.backgroundColor = color;

}


function change(color){
    document.body.style.backgroundColor = color;
}