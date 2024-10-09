const sliderAncho = document.getElementById('sliderAncho');
const sliderAlto = document.getElementById('sliderAlto');
const sliderBorde = document.getElementById('sliderBorde');
const sliderSombra = document.getElementById('sliderSombra');
const div = document.querySelector('.div');

sliderAncho.addEventListener('input', function() {
    const nuevoAncho = sliderAncho.value + 'px';
    div.style.width = nuevoAncho;
});

sliderAlto.addEventListener('input', function() {
    const nuevoAlto = sliderAlto.value + 'px';
    div.style.height = nuevoAlto;
});

// Cambiar borde del div
sliderBorde.addEventListener('input', function() {
    const nuevoBorde = sliderBorde.value + 'px';
    box.style.borderWidth = nuevoBorde; // Cambiar el ancho del borde
    box.style.borderStyle = 'solid'; // Asegurarse de que el borde sea sólido
    box.style.borderColor = 'black'; 
});

sliderSombra.addEventListener('input', function() {
    const sombra = sliderSombra.value + 'px';
    div.style.boxShadow = `0 0 ${sombra} rgba(0, 0, 0, 0.5)`;
});
