import { $ } from './utils.js'
import { add, move, remove } from './functions.js'

let ul_todo = $(".todo");
let ul_done = $(".done");
let form = $("form");


// add todo 
form.addEventListener("submit", (event) => add(event, ul_todo));

// move to another list on click
ul_done.addEventListener("click", (event) => move(event, ul_todo));
ul_todo.addEventListener("click", (event) => move(event, ul_done));

// remove from the list on dblclk
ul_todo.addEventListener("dblclick", remove);
ul_done.addEventListener("dblclick", remove);




// start position xxx

const todos = localStorage.todos ? JSON.parse(localStorage.todos) : [];
ul_todo.innerHTML = todos.map(todo => `<li>${todo}</li>`).join('');

