// Run On Page Load
$(window).on("load", function() {

    //Preloader
    $('#loader-wrapper').fadeOut(1600, function() { $(this).remove(); });

    /* activate jquery isotope */
    var $container = $('#portfolio-container');
    $container.isotope({
        masonry: {
            columnWidth: '.portfolio-item'
        },
        itemSelector: '.portfolio-item'
    });
    $('#filters').on('click', 'li', function() {
        $('#filters li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    $('#lionhero').owlCarousel({
        nav: true,
        navText: [
            "PREV",
            "NEXT"
        ],
        items: 1,
        navSpeed: 400,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });

    $("#liontestimonial").owlCarousel({

        nav: true,
        navText: [
                '🡐',
                '🡒'
            ],
        items: 1,
        navSpeed: 400,
        loop: true, 
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            1024: {
                items: 1
            }
        }
    });


});

$(document).ready(function() {

    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
            'tooltips': ['CREATIVE AGENCY', 'PORTFOLIO', 'ABOUT', 'SERVICES', 'PRICES', 'BLOG', 'CONTACT']
        }
    });


});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mynav").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mynav").style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {

    Typed.new("#typed", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 100,
        backDelay: 600,
        loop: true,
        contentType: 'html', // or text
        // defaults to null for infinite loop
        loopCount: null,
        resetCallback: function() { newTyped(); }
    });

    var resetElement = document.querySelector('.reset');
    if (resetElement) {
        resetElement.addEventListener('click', function() {
            document.getElementById('typed')._typed.reset();
        });
    }

});

function newTyped() { /* A new typed object */ }
