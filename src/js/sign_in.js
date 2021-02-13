const $ = (s, p = document) => p.querySelector(s);
// const $$ = (s, p = document) => p.querySelectorAll(s);

let form = $('.sign_in');
let email = $('.email');
let password = $('.password');

form.addEventListener("submit", (event) => sign_in(event, ul_todo));

function sign_in(event) {

}



