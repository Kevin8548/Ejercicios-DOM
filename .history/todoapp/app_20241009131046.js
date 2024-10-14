const tareasDiv = document.querySelector('.tareas');
const myForm = document.querySelector('#form');
const inputTarea = document.querySelector('#inputtarea');

const addTarea = () => {
    const tarea = inputTarea.value;
    tareasDiv.appendChild(creaObjeto(tarea));
    inputTarea.value = ''
}

const creaObjeto = (tarea) => {
    const p = document.createElement('p');
    p.innerText = tarea;
    return p;
}

myForm.addEventListener('submit', e => {
    e.preventDefault();
    addTarea();
});
