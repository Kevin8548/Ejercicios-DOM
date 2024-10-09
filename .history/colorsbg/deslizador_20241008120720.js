const sliderAncho = document.getElementById('sliderAncho');
const sliderAlto = document.getElementById('sliderAlto');
const sliderBorde = document.getElementById('sliderBorde');
const sliderSombra = document.getElementById('sliderSombra');
const sliderEsquina = document.getElementById('sliderEsquina');
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


    function nuevoColor() {
        const Rojo = document.getElementById('Rojo').value;
        const Verde = document.getElementById('Verde').value;
        const Azul = document.getElementById('Azul').value;
        const Transparencia = document.getElementById('Transparencia').value;
    
        document.body.style.div = `rgb(${Rojo}, ${Verde}, ${Azul}, ${Transparencia})`;
    }
    
});
