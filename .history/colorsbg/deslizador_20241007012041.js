const deslizador = document.getElementById('deslizador');
const div = document.getElementById('div');

deslizador.addEventListener('input', function() {
    const nuevoTamaño = deslizador.value + 'px';
    miDiv.style.width = nuevoTamaño;
    miDiv.style.height = nuevoTamaño; // Cambia el tamaño del div
});
