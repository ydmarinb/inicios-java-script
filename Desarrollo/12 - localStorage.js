'use strict'

// Local Storage

// Comprobar disponibilidad de locale storage

if (typeof(Storage) != 'undefined') {
    console.log('Locale storage disponible');
} else {
    console.log('Locale storage  no disponoble');
};


// Guardar datos

localStorage.setItem('titulo', 'Curso de java script');

// Recuperar elemento y agragrlo a pagina web


var recu_local = localStorage.getItem('titulo');
document.querySelector("#local").append(recu_local);

// Eliminar elemento del local storage

localStorage.removeItem('titulo');

// Limpiar todo 

localStorage.clear();