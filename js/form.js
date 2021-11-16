let addMassage = document.querySelector('.message'),
addButton = document.querySelector('.add'),
todo = document.querySelector('.todo');


let todoList = [];

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function (){

    let newToDo = {
        todo: addMassage.value,
    };

    let li = document.createElement("li");
    li.className = "list-group-item";

    let deleteButton = document.createElement("button");

    deleteButton.className =
        "btn-danger btn btn-sm float-right delete";

    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");

    editButton.className =
        "btn-success btn btn-sm float-right edit";

    editButton.appendChild(document.createTextNode("Edit"));

    li.appendChild(document.createTextNode(newToDo.todo));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    newToDo.appendChild(li);

    todoList.push(newToDo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages(){
    let displayMessage = '';
    todoList.forEach(function (item, i){
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}'>
            <label for='item_${i}'>${item.todo}</label>
        <\li>
        `;

        todo.innerHTML = displayMessage;
    });
}



