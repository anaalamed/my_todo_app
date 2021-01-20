import { $ } from './utils.js'
import { add, move, remove } from './functions.js'

let ul_todo = $(".todo");
let ul_done = $(".done");
let form = $("form");


// add todo 
form.addEventListener("submit", () => add(event, ul_todo));

// move to another list on click
ul_done.addEventListener("click", () => move(event, ul_todo));
ul_todo.addEventListener("click", () => move(event, ul_done));

// remove from the list on dblclk
ul_todo.addEventListener("dblclick", remove);
ul_done.addEventListener("dblclick", remove);




// start position xxx
ul_todo.innerHTML += "<li>finish homework</li>";

