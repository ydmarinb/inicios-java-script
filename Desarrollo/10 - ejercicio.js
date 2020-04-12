'use strict'

window.addEventListener('load', function() {


    var formulario = document.querySelector("#formulario");

    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function() {

        console.log("Evento submit");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("Nombre no valido");
            return false
        }

        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("Apellido no valido");
            return false
        }

        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("Edad no valido");
            return false
        }

        box_dashed.style.display = "block";

        var datos = [nombre, apellido, edad];

        for (var i in datos) {

            var parrafo = document.createElement("p");
            parrafo.append(datos[i]);
            box_dashed.append(parrafo);
        }



    });

});