//Search todo
let search = document.getElementById("search-btn");
var todoBox = document.querySelectorAll(".todo-box");

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
