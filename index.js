$(function() {

$('.menu-toggle').click(function(event) {
    event.preventDefault();
    $('ul').toggleClass('hamburger')
    $('nav').toggleClass('hamburger')
});

$('.rightLinks').on('click','a',function(event) { 
    $('html, body').animate({ scrollTop: $('.'+$(event.currentTarget).data().scrollTarget).offset().top - 60}, 500); });


});