// Run On Page Load
$(window).on("load", function() {

    //Preloader
    $('#loader-wrapper').fadeOut(1600, function() { $(this).remove(); });

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

        nav: false,
        items: 1,
        navSpeed: 400,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            1024: {
                items: 2
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
            'tooltips': ['SHAPES ARCHITECTS', 'WORK', 'ABOUT', 'SERVICES', 'TEAM', 'BLOG', 'CONTACT']
        }
    });


});
//
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mynav").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mynav").style.display = "block";
}


var deleteLog = false;

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
