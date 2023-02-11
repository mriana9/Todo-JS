//Search todo
let search = document.getElementById("search-btn");
let todoBox = document.querySelectorAll(".todo-box");

search.addEventListener("keyup", function() {
    Array.prototype.forEach.call(todoBox, function(el) {
      if (el.textContent.trim().indexOf(search.value) > -1){
            el.style.display = 'block';
      }
      else {
            el.style.display = 'none';
        }    
    });
});

//show Add New TodoForm
let addNewTodo = document.getElementById("add-new-todo");
function showAddNewTodoForm() {
    addNewTodo.classList.add('active')
}

//Add new todo
let items = JSON.parse(localStorage.getItem('todo-list')) || [];
let todoError = document.querySelector('.add-content')
function addItem() {
    var inputBox = document.querySelector('#todo-input');
    var item = inputBox.value
    
    if (item === ""){
       return todoError.style.display = 'block';
    }
    else {
        items.push({
            value: item,
            time: (new Date()).toLocaleDateString("en-US")
        })
        addNewTodo.classList.remove('active');
        todoError.style.display = 'none';
        localStorage.setItem('todo-list', JSON.stringify(items));
    }
    
    
    //listItems();
    
    inputBox.value = "";
  }
  
