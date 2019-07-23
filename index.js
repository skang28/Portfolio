$('.menu-toggle').click(function(event) {
    event.preventDefault();
    $('.rightSideLinks').toggleClass('hamburger')
});

$('.scrollLinks').click(function(event) {
    $('html, body').animate({ scrollTop: 500 }, 2000);
});