const deslizador = document.getElementById('deslizador');
const div = document.getElementById('div');

deslizador.addEventListener('input', function() {
    const nuevoTamaño = deslizador.value + 'px';
    div.style.width = nuevoTamaño;
    div.style.height = nuevoTamaño; // Cambia el tamaño del div
});
