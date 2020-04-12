$(document).ready(function() {

    //Selector de id
    var rojo = $("#rojo").css('background', 'red')
        .css('color', 'white');

    var amarillo = $('#amarillo').css('background', 'yellow')
        .css('color', 'green');

    var azul = $('#azul').css('background', 'green')
        .css('color', 'white');

    // Selectores de clase

    var miClase = $('.zebra').css("padding", '5px');

    $('.sin_borde').click(function() {
        console.log('click dado');
        $(this).addClass('zebra');
    });

    // Selectores de etiqueta

    var parrafos = $('p');

    parrafos.click(function() {

        var this_ = $(this);

        if (!this_.hasClass('grande')) {
            this_.addClass('grande');
        } else {
            this_.removeClass('grande')
        }

    });


    // Selectores de atributo

    $('[title = "Google"]').css('background', "#ccc");
    $('[title = "linkedin"]').css('background', "blue");

    // Otros


    $('p, a').addClass('margen-superior');

    var busqueda = $('#caja').find('.resaltado'); //var busqueda = $('#caja'.resaltado)
    console.log(busqueda);
});