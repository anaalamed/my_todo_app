import { $ } from './utils.js'

let input = $("input");

export function add(event, place) {
    event.preventDefault();
    place.innerHTML += `<li>${input.value}</li>`;
    localStorage.setItem("todos", JSON.stringify([...JSON.parse(localStorage.todos || '[]'), input.value]))
    input.value = "";
}

export function move(event, place) {
    setTimeout(() => {
        event.target.remove();
        place.appendChild(event.target);
    }, 200);
}

export function remove(event) {
    event.preventDefault();
    event.target.innerHTML = "";
    localStorage.removeItem(event.target);
    // event.target.remove(); // go to the function move after
}
