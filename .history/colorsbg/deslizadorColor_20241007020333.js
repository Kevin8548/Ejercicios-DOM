function updateColor() {
    const Rojo = document.getElementById('Rojo').value;
    const Verde = document.getElementById('Verde').value;
    const Azul = document.getElementById('Azul').value;

    document.body.style.backgroundColor = `rgb(${Rojo}, ${Verde}, ${Azul})`;

    document.getElementById('RojoValue').innerText = Rojo;
    document.getElementById('VerdeValue').innerText = Verde;
    document.getElementById('AzulValue').innerText = Azul;
}
