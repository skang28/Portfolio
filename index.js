$(function() {

$('.menu-toggle').click(function(event) {
    event.preventDefault();
    $('.rightSideLinks').toggleClass('hamburger')
});

$('.scrollLinks').on('click','a',function(event) { 
    $('html, body').animate({ scrollTop: $('.'+$(event.currentTarget).data().scrollTarget).offset().top }, 500); });

});