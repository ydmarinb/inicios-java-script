$(document).ready(function() {
    // MouseOver  y MouseOut
    var caja = $('#caja');
    /*
    caja.mouseover(function() {
        $(this).css('background', 'red');
    });
    caja.mouseout(function() {
        $(this).css('background', 'green');
    });
    */

    // Hover
    caja.hover(function() {
        $(this).css('background', 'red');

    }, function() {
        $(this).css('background', 'green');
    });

    // Click, Doble click


    caja.click(function() {
        $(this).css('background', 'blue')
            .css('color', 'white');

    });


    caja.dblclick(function() {
        $(this).css('background', 'pink')
            .css('color', 'yellow');

    });


    // Focus y blur

    var datos = $('#datos');

    $('#nombre').focus(function() {
        $(this).css('border', '2px solid green');

    });
    $('#nombre').blur(function() {
        $(this).css('border', '2px solid #ccc');
        datos.text($(this).val()).show();
    });

    // MouseDown y MouseUp

    datos.mousedown(function() {
        $(this).css('border-color', 'gray');
    });

    datos.mouseup(function() {
        $(this).css('border-color', 'black');
    });


    // Capturar cordenadas
    $(document).mousemove(function() {
        $('#siguiendo').css('left', event.clientX)
            .css('top', event.clientY);
    });

});