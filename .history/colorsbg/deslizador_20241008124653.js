const sliderAncho = document.getElementById('sliderAncho');
const sliderAlto = document.getElementById('sliderAlto');
const sliderBorde = document.getElementById('sliderBorde');
const sliderSombra = document.getElementById('sliderSombra');
const sliderEsquina = document.getElementById('sliderEsquina');
const sliderColor = document.getElementById('sliderColor');
const div = document.querySelector('.div');

sliderAncho.addEventListener('input', function() {
    const nuevoAncho = sliderAncho.value + 'px';
    div.style.width = nuevoAncho;
});

sliderAlto.addEventListener('input', function() {
    const nuevoAlto = sliderAlto.value + 'px';
    div.style.height = nuevoAlto;
});

sliderSombra.addEventListener('input', function() {
    const sombra = sliderSombra.value + 'px';
    div.style.boxShadow = `0 0 ${sombra} rgba(0, 0, 0, 1)`;
});

sliderEsquina.addEventListener('input', function() {
    div.style.borderRadius = `${sliderEsquina.value}px`;

    sliderColor.addEventListener('input', function() {
        const h = sliderColor.value; // Obtiene el valor del slider para el tono
        const s = 100; // Saturación al 100%
        const l = 50;  // Luminosidad al 50%
    
        // Cambia el color de fondo usando HSL
        div.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
});
});
