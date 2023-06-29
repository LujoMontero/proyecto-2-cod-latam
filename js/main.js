const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});

let parrafoElement = document.getElementById("bio");
console.log(parrafoElement.innerHTML); 

let botonAgregarClaseEIDOS = document.getElementById("agregar-EIDOS");
let botonAgregarClaseACCENTURE = document.getElementById("agregar-ACCENTURE");
let botonQuitarClasefondos = document.getElementById("quitar-fondos");

botonAgregarClaseEIDOS.addEventListener("click", function () {
    parrafoElement.classList.add("red-title");
});
botonAgregarClaseACCENTURE.addEventListener("click", function () {
    parrafoElement.classList.add("red-title");
});

botonQuitarClasefondos.addEventListener("click", function () {
    parrafoElement.classList.remove("red-title");
});
