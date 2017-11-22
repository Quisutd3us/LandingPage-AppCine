$(document).ready(function () {
    $('section#sectionPantallas a').on('click', function () {
        $('#exampleModal img').attr('src', $(this).attr('data-image-url'));
    });
});