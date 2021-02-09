const toDoForm= document.querySelector('.js-toDo'),
    toDoinput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

    const TODOS_LS = 'toDosData'

    let toDosData = [];

function loadTodos(){
    const loadtoDos = localStorage.getItem(TODOS_LS);
    if(loadtoDos !== null){
        const parseToDos= JSON.parse(loadtoDos);
        parseToDos.forEach(function(toDo){
            printTodo(toDo.text);
            
        });
    }
}
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDosData));
}
function printTodo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const NewId = toDosData.length + 1;
    span.style.color ="white";
    delBtn.innerText = 'X';
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = NewId;
    toDoList.appendChild(li);
    const toDoobj ={
        text: text,
        id: NewId
    };
    toDosData.push(toDoobj);
    saveToDos();
    
    

}
function deleteToDo(event){
const btn =event.target;
const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDosData.filter(function(ToDo){
        return ToDo.id !== parseInt(li.id);
    });
    toDosData = cleanToDos;
    saveToDos();
}
function handleSubmit(){
    event.preventDefault();
    const currentValue = toDoinput.value;
    printTodo(currentValue);
    toDoinput.value = "";
    
}


    function init(){
        loadTodos();
        toDoForm.addEventListener("submit",handleSubmit);
        

    }


    init();