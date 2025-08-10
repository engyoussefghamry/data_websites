/*==============================
    preloader js
==============================*/
$(window).on('load', function () {
    $('.preloader').fadeOut("slow");
});

$(document).ready(function() {
    /*==============================
        popup js
    ==============================*/
    $(window).on('load',function() {
        $('#popup').modal('show');
    });

    /*==============================
        sticky header js
    ==============================*/
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > lastScrollTop) {
            $('.header-area').addClass('sticky-down');
            $('.header-area').removeClass('sticky-up');
        } 
        else {
            if (lastScrollTop <= 100) {
                $('.header-area').removeClass('sticky');
                $('.header-area').removeClass('sticky-down');
                $('.header-area').removeClass('sticky-up');
            } else {
                $('.header-area').addClass('sticky');
                $('.header-area').removeClass('sticky-down');
                $('.header-area').addClass('sticky-up');
            }
        }
        lastScrollTop = scroll;
    });
    
    /*==============================
        features js
    ==============================*/
    // features js
    var swiper = new Swiper('.swiper#features-slider', {
        slidesPerView: 4,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        observer: true,
        observerParents: true,    
        navigation: {
            prevEl: '.new-swiper-prev',
            nextEl: '.new-swiper-next'
        },
        pagination: {
            el: '.swiper-pagination-new',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        product js
    ==============================*/
    // product js
    var swiper = new Swiper('.swiper#product-slider', {
        slidesPerView: 4,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        observer: true,
        observerParents: true,
        navigation: {
            prevEl: '.product-swiper-prev',
            nextEl: '.product-swiper-next'
        },
        pagination: {
            el: '.swiper-pagination-product',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        back-to-top js
    ==============================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('#top').addClass('show');
        } else {
            $('#top').removeClass('show');
        }
    });
    $('#top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});