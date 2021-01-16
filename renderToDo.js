let ul_todo = document.querySelector('.todo');
let ul_done = document.querySelector('.done');
let input = document.querySelector('input');

const form = document.querySelector('form');



form.addEventListener('submit', add );
// form.on('submit', function(){
//     ul_todo.innerHTML += `<li>${input.value}</li>`;
//     input.value='';
// });


ul_todo.addEventListener('click', move);
ul_done.addEventListener('click', move);

ul_todo.addEventListener('dblclick', remove);
ul_done.addEventListener('dblclick', remove);




ul_todo.innerHTML += '<li>wake up</li>'
ul_todo.innerHTML += '<li>eat breakfast</li>'
ul_todo.innerHTML += '<li>finish homework</li>'




function add(event) {
    event.preventDefault();
    // console.log(input.value);
    ul_todo.innerHTML += `<li>${input.value}</li>`;
    input.value='';
}

function move(event) {
    setTimeout( () => {     // prevent click before dblclick
        if (event.target.parentNode.classList[0] === 'todo') {
            ul_done.innerHTML += `<li>${event.target.innerHTML}</li>`;
            event.target.innerHTML = '';
        }
        else if(event.target.parentNode.classList[0] === 'done') {
            ul_todo.innerHTML += `<li>${event.target.innerHTML}</li>`;
            event.target.innerHTML = '';
        }
    },200);   
}

function remove(event) {
    event.preventDefault();
    event.target.innerHTML = '';
}


