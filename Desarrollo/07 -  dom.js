'use strict'

// DOM

function cambia_color(color) {
    caja.style.background = color;
}


//var caja = document.getElementById("caja");

var caja = document.querySelector("#caja");
caja.innerHTML = "Texto en la caja desde js";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
console.log(caja);


// Conseguir elementos por su etiqueda 

var todos_los_div = document.getElementsByTagName("div");
var texto_uno = todos_los_div[1].innerHTML


var i;
for (i in todos_los_div) {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todos_los_div[i].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#seccion").appendChild(parrafo)
}

console.log(texto_uno)

// Conseguir elementos por su clase css

var div_rojos = document.getElementsByClassName("rojo");

// Puede manipular por indice
//div_rojos[0].style.background = "red";
//div_rojos[1].style.background = "red";


// Puede manipular por ciclo

for (var div in div_rojos) {
    if (div_rojos[div].className == "rojo") {
        div_rojos[div].style.background = "red";
    }

}



console.log(div_rojos);

// Query selector