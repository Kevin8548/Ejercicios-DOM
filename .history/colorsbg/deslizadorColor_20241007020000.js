function NuevoRojo() {
    const Rojo = document.getElementById('Rojo').value;
    document.body.style.backgroundColor = `rgb(${Rojo}, 0, 0)`;
    document.getElementById('RojoValue').innerText = Rojo;
}

function NuevoVerde() {
    const Verde = document.getElementById('Verde').value;
    document.body.style.backgroundColor = `rgb(0, ${Verde}, 0)`;
    document.getElementById('VerdeValue').innerText = Verde;
}

function NuevoAzul() {
    const Azul = document.getElementById('Azul').value;
    document.body.style.backgroundColor = `rgb(0, 0, ${Azul})`;
    document.getElementById('AzulValue').innerText = Azul;
}
