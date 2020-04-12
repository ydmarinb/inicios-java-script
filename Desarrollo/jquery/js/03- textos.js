$(document).ready(function() {

    checkLinks();

    $('#add_button').click(function() {
        $('#menu').append('<li><a href= "' + $('#add_link').val() + '"></a></li>');
        checkLinks();
    });


});

function checkLinks() {
    $('a').each(function(index, element) {
        var this_ = $(this);
        var enlace = this_.attr('href');
        this_.text(enlace);
    });
}