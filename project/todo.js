

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function setitem() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function show() {
    let list = document.getElementById('list');
    list.innerHTML = tasks.map((item, index) => {
        return `<div class = "todo-item">
        <div class = "todo-list">${item}</div>
        <button class = "btn" onclick = "dlttask(${index})"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
    }).join("");
}

function add() {
    let input = document.getElementById('putdata');
    let Value = input.value.trim();

    if(Value == ""){
        alert("enter any item")
        return;
    };

    tasks.push(Value);
    setitem();
    show();
    input.value = "";
}

function dlttask(index){
    tasks.splice(index, 1);
    setitem();
    show();
}
