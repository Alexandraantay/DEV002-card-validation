import validator from './validator.js';
let registrarte = document.getElementById("registrarte");
registrarte.addEventListener("click", MostrarVista2);
function MostrarVista2() {
    let vista_1 = document.getElementById("pantalla1")
    pantalla1.style.display = "none";
    let vista_2 = document.getElementById("pantalla2");
    pantalla2.style.display = "inline-flex";
    mostrarSaludo();
}

function mostrarSaludo() {
    let usuario = document.getElementById("name");
    let nombre = usuario.value;

    let hola = document.getElementById("saludo");

    hola.innerHTML = "Hola, " + nombre + " ahora estarás registrando los datos de tu tarjeta para completar tu registro";
}

let inputCard = document.getElementById("numero");

let btnValidation = document.getElementById("validar");
btnValidation.addEventListener("click", function (e) {
    e.preventDefault();
    let numberCard = inputCard.value;
    console.log(numberCard)
    let resultValidation = validator.isValid(numberCard);
    let resultMaskify = validator.maskify(numberCard);

    if (resultValidation) {
        document.getElementById("numero").innerHTML = resultMaskify;
        alert("Felicidades ,la tarjeta ingresada es válida")
    } else {
        alert("La tarjeta registrada no es válida, por favor intente nuevamente")
    }
    inputCard.value= resultMaskify;
})

