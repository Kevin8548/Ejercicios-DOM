const tareasDiv = document.querySelector('.tareas');
const myForm = document.querySelector('#form');
const inputTarea = document.querySelector('#inputtarea');

let arrayTareas= [];
const addTarea = () => {
    const tarea = inputTarea.value;
    arrayTareas.push({
        tarea : tarea,
        estado: 'red',
        id: Math.floor(Math.random()* 1000)
    });
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
    // tareasDiv.appendChild(creaObjeto(tarea));
    creaDivs();
    inputTarea.value= '';
}

const creaDivs = () => {
    tareasDiv.value = '';
    arrayTareas.forEach(tarea =>{
        tareasDiv.appendChild(creaObjeto(tarea));
    })
}

const eliminaObjeto = e => {
    const button = e.target;
    const papa = button.parentElement;
    papa.remove();
}


const changeColor = e=> {
    const myDiv = e.target;
    const id = myDiv.getAttribute('data-id');
    const idTarea = arrayTareas.findIndex(t => t.id === Number(id))
    if(myDiv.classList.contains('red')){
        myDiv.classList.remove('red');
        myDiv.classList.add('yellow');
        arrayTareas[idTarea].estado= 'Yellow';
    }
    else if (myDiv.classList.contains('yellow')){
        myDiv.classList.remove('yellow');
        myDiv.classList.add('green')
        arrayTareas[idTarea].estado='Green'
    }
}

const creaObjeto = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = tarea.tarea;
    const button = document.createElement('button')
    button.innerText= 'Eliminar';
    button.addEventListener('click', eliminaObjeto)
    div.appendChild(p);
    div.appendChild(button);

    div.classList.add('alert');
    div.classList.add(tarea.estado);
    div.setAttribute('data-id',tarea.id);
    div.addEventListener('click', changeColor)


    return div;
}

arrayTareas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItemet('tareas')) : [];
    creaDivs;

myForm.addEventListener('submit', e => {
    e.preventDefault();
    addTarea();
});


