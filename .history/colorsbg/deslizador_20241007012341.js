const deslizador = document.getElementById('deslizador');
const div2 = document.getElementById('div2');

deslizador.addEventListener('input', function() {
    const nuevoTamaño = deslizador.value + 'px';
    div2.style.width = nuevoTamaño;
    div2.style.height = nuevoTamaño; // Cambia el tamaño del div
});
