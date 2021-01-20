import { $ } from './utils.js'

let input = $("input");

export function add(event, place) {
    event.preventDefault();
    place.innerHTML += `<li>${input.value}</li>`;
    input.value = "";
}

export function move(event, place) {
    setTimeout(() => {
        place.innerHTML += `<li>${event.target.innerHTML}</li>`;
        event.target.innerHTML = "";
    }, 200);
}

export function remove(event) {
    event.preventDefault();
    event.target.innerHTML = "";
}