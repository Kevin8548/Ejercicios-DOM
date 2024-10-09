function nuevoColor() {
    const Rojo = document.getElementById('Rojo').value;
    const Verde = document.getElementById('Verde').value;
    const Azul = document.getElementById('Azul').value;
    const Transparencia = document.getElementById('Transparencia').value;

    document.body.style.backgroundColor = `rgb(${Rojo}, ${Verde}, ${Azul}, ${Transparencia})`;
}
