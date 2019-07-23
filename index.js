$(function() {

$('.menu-toggle').click(function(event) {
    event.preventDefault();
    $('.navigation').toggleClass('hamburger')
});

$('.rightLinks').on('click','a',function(event) { 
    $('html, body').animate({ scrollTop: $('.'+$(event.currentTarget).data().scrollTarget).position().top - 60 }, 500); });

});