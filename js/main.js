const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});

let fondosElement = document.getElementById("portada");
console.log(fondosElement.innerHTML); 

let fondos2Element = document.getElementById("habilidades");
console.log(fondos2Element.innerHTML);

let fondos3Element = document.getElementById("footer");
console.log(fondos3Element.innerHTML); 

let fondos4Element = document.getElementById("boton");
console.log(fondos3Element.innerHTML); 



let botonAgregarClaseEIDOS = document.getElementById("agregar-EIDOS");
let botonAgregarClaseACCENTURE = document.getElementById("agregar-ACCENTURE");
let botonQuitarClasefondos = document.getElementById("quitar-fondos");

botonAgregarClaseEIDOS.addEventListener("click", function () {
    fondosElement.classList.add("eidos");
    fondos2Element.classList.add("eidos");
    fondos3Element.classList.add("eidos");
    fondos4Element.classList.add("eidos");
    
});
botonAgregarClaseACCENTURE.addEventListener("click", function () {
    fondosElement.classList.add("accenture");
    fondos2Element.classList.add("accenture");
    fondos3Element.classList.add("accenture");
    fondos4Element.classList.add("accenture");
    
});

botonQuitarClasefondos.addEventListener("click", function () {
    fondosElement.classList.remove("eidos");
    fondos2Element.classList.remove("eidos");
    fondos3Element.classList.remove("eidos");
    fondos4Element.classList.remove("eidos");
    fondosElement.classList.remove("accenture");
    fondos2Element.classList.remove("accenture");
    fondos3Element.classList.remove("accenture");
    fondos4Element.classList.remove("accenture");
});
