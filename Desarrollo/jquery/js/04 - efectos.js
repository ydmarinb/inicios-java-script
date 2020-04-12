$(document).ready(function() {

    var caja = $('#caja');

    $('#mostrar').click(function() {
        $(this).hide();
        $('#ocultar').show();
        $('#caja').show('normal');
    });

    $('#ocultar').click(function(e) {
        $(this).hide();
        $('#mostrar').show();
        $('#caja').hide('normal');
    });

    $('#animame').click(function() {

        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
        }, 'slow')

        .animate({
            borderRadius: '900px',
            marginTop: '80px'
        }, 'slow')

        .animate({
            borderRadius: '0px',
            marginLeft: '0px'
        }, 'slow')

        .animate({
            borderRadius: '100px',
            marginTop: '0px'
        }, 'slow');
    });

});