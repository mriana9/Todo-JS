//Search todo
const searchBar = document.querySelector('#search-btn');
searchBar.addEventListener('keyup', (e) => {
  const allTodo = document.querySelectorAll(".todo-box");
  Array.from(allTodo).forEach((el) => {
    if (el.textContent.trim().indexOf(searchBar.value) > -1) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
});


//show Add New TodoForm
let addNewTodo = document.getElementById("add-new-todo");
function showAddNewTodoForm() {
    addNewTodo.classList.add('active')
}

//Close Add New TodoForm
function closeForm() {
    addNewTodo.classList.remove('active')
}


//show all todo items
let todoCount = 0;
function todoItems() {
    let list = "";
    for (let i = 0; i < items.length; i++) {
      todoCount = items.length
      list+= "<div class='todo-box'>"
      list += "<span class='mark-todo' onclick='markAsDone("+ i +")'>"+ '&#9634' +"</span> ";
      list += "<li class="+ (items[i].done ? "done" : "") +">";
      list += items[i].value + "</li> ";
      list+= "<div>";
      list += "<span class='delete' onclick='deleteItem("+ i +")'>	&#128465 </span>";
      list += "<span class='update' onclick='updateItem("+ i +")'>  &#9998 </span>";
      list+= "</div>";
      list+= "</div>";

    }
    document.querySelector("#all-todo").innerHTML = list;
    document.querySelector("#todo-count").innerHTML = todoCount +" هدف / أهداف)";
}


//Add new todo
let items = JSON.parse(localStorage.getItem('todo-list')) || [];
let todoError = document.querySelector('.add-content')
function addItem() {
  let inputBox = document.querySelector('#todo-input');
  let item = inputBox.value
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


function markAsDone(index) {
    items[index].done = !items[index].done;
    localStorage.setItem('todo-list', JSON.stringify(items));
    todoItems();
}

function startDate() {
  let d = new Date();
  let days = ["الأحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" (";
}

//updateItem 
function updateItem(index) {
  addNewTodo.classList.add('active');
  let inputBox = document.querySelector('#todo-input');
  inputBox.value = items[index].value;
  localStorage.setItem('todo-list', JSON.stringify(items));
  items.splice(index, 1);
}

// function to run when page loads
(function() {
    todoItems();
    startDate();
})();