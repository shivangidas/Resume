$(document).ready(function() {
    "use strict";

    $('[data-toggle="tooltip"]').tooltip();

    $('a.gallery').colorbox({
        'rel': 'gallery',
        'maxWidth': '80%',
        'transition': 'fade',
        'speed': 150,
        'slideshow': true,
        'slideshowSpeed': 7000,
        'current': ''
    });
});