// Run On Page Load
$(window).on("load", function() {

    //Preloader
    $('#loader-wrapper').fadeOut(1600, function() { $(this).remove(); });

});

//Navigation Scrolling
    $('a.scroll').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });