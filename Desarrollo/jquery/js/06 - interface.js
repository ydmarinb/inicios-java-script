$(document).ready(function() {

    // Mover elementos por la pagina
    $('.elemento').draggable();

    // Redimensional

    $('.elemento').resizable();

    // Seleccionar elementos
    //$('.lista-seleccion').selectable();

    //Ordenar
    $('.lista-seleccion').sortable({
        update: function(event, ui) {
            console.log('Ha cambiado la lista')
        }
    });

    //Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function() {
            console.log('Has solatado algo dentro del area')
        }
    });


    // Efectos
    $('#mostrar').click(function() {
        $(".caja-efecto").toggle('shake', 'slow');
    });


    //Tooltup
    $(document).tootip();

    // Dialog
    //$('#popup').dialog();

    //datepicker

    $('#calendario').datepicker();


});