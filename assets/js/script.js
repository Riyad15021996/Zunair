/*
    ========================================
    Preloader
    ========================================
    */

if ($('#preloader').length) {
    $(window).on('load', function() {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });
}


/* 
=====================================================
    Start active menu
======================================================
*/



/* 
=====================================================
    Responsive Menu
======================================================
*/
// Responsive Menu
$(document).ready(function() {
    // jQuery code
    $("[data-trigger]").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id = $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });

    $(".close, .screen-overlay,.menu-one ul li a").click(function(e) {
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
        $(".icon").removeClass("icon-bar");

    });

}); // jquery end
/* 
=====================================================
    add remove class
======================================================
*/
$('.buttons').click(function() {
        $('body').addClass('white-theme');
    }),
    $('.buttons2').click(function() {
        $('body').removeClass('white-theme');
    }),

    /* close  */
    $('.icon').click(function() {
        $('.icon').toggleClass('icon-bar');
    }),
    /* ===============================================
            fixed menu js
        ===============================================
    */

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $("#mainNav").addClass("shrinkheader");
        } else {
            $("#mainNav").removeClass("shrinkheader");
        }
    });

/* 
========================================
    Wow Animation
========================================
*/

new WOW().init();