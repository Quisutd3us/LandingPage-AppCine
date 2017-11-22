$(document).ready(function () {
    $('section#pantallas a').on('click', function () {
        $('#exampleModal img').attr('src', $(this).attr('data-image-url'));
    });
});