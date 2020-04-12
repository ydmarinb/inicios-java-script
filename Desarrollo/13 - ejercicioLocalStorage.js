'use sctrict'

var formulario = document.querySelector("#form_movies");

formulario.addEventListener('submit', function() {


    var titulo = document.querySelector('#add_movie').value;

    if (titulo.lenght >= 1) {
        localStorage.setItem(titulo, titulo);
    }

});

var ul = document.querySelector("#movie_list")

for (var i in localStorage) {

    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }


}