$(function() {

$('.menu-toggle').click(function(event) {
    event.preventDefault();
    $('ul').toggleClass('hamburger')
    $('nav').toggleClass('hamburger')
});

$('.nav').find("a").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".pactive").fadeOut(200, function() {
        $(this).removeClass("pactive");
    });
    $("#p" + this.id).fadeIn(200, function() {
        $(this).addClass("pactive");
    });
});

});