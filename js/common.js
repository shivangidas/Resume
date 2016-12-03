$(document).ready(function(){
	"use strict";
   
    $('[data-toggle="tooltip"]').tooltip(); 

    $('a.gallery').colorbox({
                        	'rel'            : 'gallery',
                        	'maxWidth'       : '80%',
                        	'transition'     : 'fade',
                        	'speed'          : 150,
                        	'slideshow'      : true,
                        	'slideshowSpeed' : 7000,
                        	'current'        : ''
    });
  
    
    var $booktooltip=$('#booksSlideShow');  
    $booktooltip.hide();
        
    setTimeout(function () {
        var $position1=$('#book1image').offset();
        var $height =$('#book1image').css('height');
        $booktooltip.css({
                            'top'     : parseInt($position1.top) + parseInt($height)-70,
                            'left'    : parseInt($position1.left)-240,
                            'position':'absolute',
                            'color'   :'white',
                            'font'    : 'bold'
        });
         $("#booksSlideShow").show('fade');
        }, 3000 );     

});