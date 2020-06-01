$(function() {

$('.menu-toggle').click(function(event) {
    event.preventDefault();
    $('ul').toggleClass('hamburger')
    $('nav').toggleClass('hamburger')
});

$('.rightLinks').on('click','a',function(event) { 
    $('html').animate({ scrollTop: $('.'+$(event.currentTarget).data().scrollTarget).offset().top - 50}, 500); });


});