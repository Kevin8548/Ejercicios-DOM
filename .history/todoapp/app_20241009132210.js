const tareasDiv = document.querySelector('.tareas');
const myForm = document.querySelector('#form');
const inputTarea = document.querySelector('#inputtarea');

const addTarea = () => {
    const tarea = inputTarea.value;
    tareasDiv.appendChild(creaObjeto(tarea));
    inputTarea.value = ''
}

const eliminaObjeto = e => {
    const button = e.target;
    const papa = button.parentElement;
    papa.remove();
}

const creaObjeto = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = tarea;
    const button = document.createElement('button')
    button.innerText= 'Eliminar';
    button.addEventListener('click', eliminaObjeto)
    div.appendChild(p);
    div.appendChild(button);
    return div;
}

myForm.addEventListener('submit', e => {
    e.preventDefault();
    addTarea();
});
