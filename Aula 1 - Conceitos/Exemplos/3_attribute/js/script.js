
$(document).ready(function () {

    $('p').html('<span class="cor"> hello </span>');

    $('li').addClass('margin')

    $('p').click(function () {
        $(this).toggleClass('destaque')
    })



})