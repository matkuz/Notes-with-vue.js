/*rwd hover nav*/
if ($(window).width() <= 992) {  
        $("#sidr-main-nav ul > li a").addClass("hvr-underline-from-center");
    }else{
        $("#sidr-main-nav ul > li a").removeClass("hvr-underline-from-center");
    };

    $(window).resize(function(){
           if ($(window).width() <= 992) {  
                $("#sidr-main-nav ul > li a").addClass("hvr-underline-from-center");
           }else{
                $("#sidr-main-nav ul > li a").removeClass("hvr-underline-from-center");
           };
    });

/*nav*/

var scrollingStartDistance = $("nav").offset().top;
    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
                $("#top-wrapper").toggleClass("top-wrapperScroll", scrollTop > scrollingStartDistance);
    });
/*tooltip*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
/*sidr*/

$(function() {
    $('#sidr-toggle').sidr({
        name: 'sidr-nav',
        source: '#sidr-main-nav',
        side: 'left',
        renaming: 0,
        speed: 400,
    });

    $('body>.wrapper, .sidr a.onepage').on('click', function() {
        $.sidr('close', 'sidr-nav');
        $('a.sidr-toggle .tr').removeClass('active');
    });

    // transformicon animation
    $('a.sidr-toggle').on('click', function(){
        $(this).find('.tr').toggleClass('active');
    });
});

/*slider*/

var owl = $('#owl-main-slider');
                        owl.owlCarousel({
                            itemElement: 'slide',
                            items: 1,
                            autoplay: true, 
                            autoplaySpeed: 800,
                            autoplayTimeout: 5800,
                            navSpeed: 1500,
                            autoplayHoverPause: true,
                            center: false,
                            autoWidth: false,
                            loop: true,
                            rewind: false,
                            mouseDrag: true,
                            dots: true,
                            nav: true,
                            navText: [
                              "<i class='fa fa-angle-left'></i>",
                              "<i class='fa fa-angle-right'></i>"
                            ],
                            margin: 0,
                            itemsDesktop : [1199,1],
                            itemsDesktopSmall : [980,1],
                            itemsTablet: [768,1],
                            itemsMobile : [479,1]
                        });

//slider2

var owl = $('#owl-offer-slider');
                        owl.owlCarousel({
                            itemElement: 'slide2',
                            items: 1,
                            autoplay: true, 
                            autoplaySpeed: 800,
                            autoplayTimeout: 5800,
                            navSpeed: 1500,
                            autoplayHoverPause: true,
                            center: false,
                            autoWidth: false,
                            loop: true,
                            rewind: false,
                            mouseDrag: true,
                            dots: true,
                            dotsContainer: '#main-slider-dots',
                            nav: true,
                            navText: [
                              "<i class='fa fa-angle-left'></i>",
                              "<i class='fa fa-angle-right'></i>"
                            ],
                            margin: 0,
                            itemsDesktop : [1199,1],
                            itemsDesktopSmall : [980,1],
                            itemsTablet: [768,1],
                            itemsMobile : [479,1]
                        });