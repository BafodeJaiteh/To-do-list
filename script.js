`use strict`;

// contante 
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
let li;



// create element li function
function CreateLi() {
    li = document.createElement('li');
}

// add with enter function
function GetInputValueEnter(key) {
    if (key.keyCode === 13) {
        addItemOnMyTodo();
    }
}
//add input value in li
function AddValueinLi() {
    li.append(document.createTextNode(input.value));
}

// insert element li in ul function
function InsertLiInUL() {
    ul.insertAdjacentElement('beforeend', li);
}

//reset input function
function ClearInput() {
    input.value = "";
}

function addItemOnMyTodo() {

    CreateLi();
    AddValueinLi();
    InsertLiInUL();
    ClearInput();
}


button.addEventListener("click", addItemOnMyTodo);
input.addEventListener("keypress", getInputValueEnter);