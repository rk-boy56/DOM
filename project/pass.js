function show(){
    let input = document.getElementById('pass');
    let icon = document.getElementById('icon');

    if(input.type == "password"){
        input.type = "text";
        icon.className = "fa-solid fa-eye-slash";
    }else{
        input.type = "password";
        icon.className = "fa-solid fa-eye";
    }
    
}
