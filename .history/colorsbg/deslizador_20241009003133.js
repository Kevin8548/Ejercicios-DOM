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
    div.style.boxShadow = `0 0 ${sombra} rgba(0, 0, 0, 100)`;
});

sliderEsquina.addEventListener('input', function() {
    div.style.borderRadius = `${sliderEsquina.value}px`;

sliderColor.addEventListener('input', () => {
    div.style.backgroundColor = `hsl(${sliderColor.value}, 100%, 50%)`;
    });
});
