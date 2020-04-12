$(document).ready(function() {

    //Load
    //$('#datos').load('https://reqres.in/');

    //Get y Post

    //$.get('https://reqres.in/api/users', { page: 3 }, function(reponse) {
    //  console.log(Response);
    //});

    /*
    
    }
    $.post('https://reqres.in/api/users', usuario, function(reponse) {
        console.log(reponse);

    });¨*/

    var usuario = {
        'name': 'Daniel Marín',
        'web': 'ydmarinb.github.io'
    };

    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: usuario,
        beforeSend: function() {
            console.log('Enviando usuario ...');
        },
        success: function() {
            console.log(response);
        },
        error: function() {
            console.log('Ha ocurrido un error');
        },
        timeout: 1000
    });






});