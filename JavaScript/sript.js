$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu, #ab').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});



