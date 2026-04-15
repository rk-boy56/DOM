
////1st


function area() {
    let tarea = document.getElementById('textAR');
    let tvalue = tarea.value;
    for(let i = 0; i <= tvalue.length; i++){
        document.getElementById('para').innerHTML = "50/" + tvalue.length;
        if(i == 50){
            document.getElementById('warng').innerHTML = "you can't add more than 50 character";
            document.getElementById('warng').style.color = "red";
        }
    }
}

////2nd


const arr = [];

function add() {
    let input = document.getElementById('item').value;
    let a = arr.push(input);
    document.getElementById("item").value = "";
    console.log(arr)
    showtask()
}

function showtask() {
    let list = document.getElementById('tasklist');
    list.innerHTML = arr.map((task, index) => {
        return `<div class = "li-div">
            <div>${task}</div>
        </div>`
    }).join("")
}


//3rd



let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function savedata() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

function showdata() {
    let ullist = document.getElementById('itemlist');
    ullist.innerHTML = tasks.map((list, index) => {
        return `<div class = "todo-item">
        <div class = "todo-list">${list}</div>
        </div>`;
    }).join("");
}

function addData() {
    let item = document.getElementById('data');
    let itemValue = item.value.trim();

    if(itemValue == ""){
        alert("Please enter a task");
        return;
    }

    tasks.push(itemValue);
    savedata();
    showdata()
    item.value = "";
};
