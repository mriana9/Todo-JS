//Search todo
// let search = document.getElementById("search-btn");
// let todoBox = document.querySelectorAll(".todo-box");
// search.addEventListener("keyup", function() {
//     Array.prototype.forEach.call(todoBox, function(el) {
//       if (el.textContent.trim().indexOf(search.value) > -1){
//             el.style.display = 'block';
//       }
//       else {
//             el.style.display = 'none';
//         }    
//     });
// });


//show Add New TodoForm
let addNewTodo = document.getElementById("add-new-todo");
function showAddNewTodoForm() {
    addNewTodo.classList.add('active')
}


//show all todo items
let todoCount = 0;
function todoItems() {
    var list = "";
    for (var i = 0; i < items.length; i++) {
      todoCount = items.length
      list+= "<div class='todo-box'>"
      list += "<li class="+ (items[i].done ? "done" : "") +">";
      list += items[i].value + " ";
      list += "<span class='delete' onclick='deleteItem("+ i +")'>	&#128465 </span></li>";
      list+= "</div>";
    }
    document.querySelector("#all-todo").innerHTML = list;
    document.querySelector("#todo-count").innerHTML = todoCount +" هدف / أهداف";
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
        })
        addNewTodo.classList.remove('active');
        todoError.style.display = 'none';
        localStorage.setItem('todo-list', JSON.stringify(items));
    }
    todoItems();  
    inputBox.value = "";
}
  
  
//Delete Todo
function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('todo-list', JSON.stringify(items))
    todoItems();
}



// function to run when page loads
(function() {
    todoItems();
})();