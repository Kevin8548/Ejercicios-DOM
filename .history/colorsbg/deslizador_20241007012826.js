const sliderAncho = document.getElementById('sliderAncho');
const sliderAlto = document.getElementById('sliderAlto');
const sliderBorde = document.getElementById('sliderBorde');
const sliderSombra = document.getElementById('sliderSombra');
const div2 = document.querySelector('.div2');

// Cambiar ancho del div
sliderAncho.addEventListener('input', function() {
    const nuevoAncho = sliderAncho.value + 'px';
    div2.style.width = nuevoAncho;
});

// Cambiar alto del div
sliderAlto.addEventListener('input', function() {
    const nuevoAlto = sliderAlto.value + 'px';
    div2.style.height = nuevoAlto;
});

// Cambiar borde del div
sliderBorde.addEventListener('input', function() {
    const nuevoBorde = sliderBorde.value + 'px';
    div2.style.border = `${nuevoBorde} solid black`; // Cambiar el borde
});

// Cambiar sombra del div
sliderSombra.addEventListener('input', function() {
    const sombra = sliderSombra.value + 'px';
    div2.style.boxShadow = `0 0 ${sombra} rgba(0, 0, 0, 0.5)`; // Cambiar la sombra
});
