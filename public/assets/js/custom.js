var PATH = {};
(function($) {
    "use strict"

    /******************** 1. PRELOADER ********************/
    PATH.preLoader = function() {
        $(".preloader").fadeOut();
        $("#preloader-wrap").fadeOut("slow");
        $("#preloader-wrap").css("display", "none");
    }

    /******************** 2. ADD CLASS HEADER ********************/
    PATH.HeaderSticky = function() {
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(),
                $(".navbar").addClass("fixed-header")
        });
    }

    /******************** 3. NAV COLLAPSE ********************/
    PATH.MenuClose = function() {
        $('.navbar-nav .nav-link').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse("hide");
            }
        });
    }

    /******************** 4. NAV SMOOTH SCROLL ********************/
    PATH.HeaderScroll = function() {
        $('header a[href*="#"]:not([href="#"])').on('click', function() {
            var PathName = location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname;
            if (PathName) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 65,
                    }, 1000);
                    return false;
                }
            }
        });
    }

    /******************** 5. FIXED HEADER ********************/
    PATH.HeaderFixed = function() {
            var varHeaderFix = $(window).scrollTop() >= 60,
                $navbar = $('.navbar');
            if (varHeaderFix) {
                $navbar.addClass('fixed-header');
            } else {
                $navbar.removeClass('fixed-header');
            }
        }
        /******************** 6. HERO SLIDER  ********************/
    PATH.heroSlider = function() {
        var swiper = new Swiper('.hero-swiper', {
            speed: 1000,
            autoplay: {
                delay: 10000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    /******************** 7. TEXT ANIMATION ********************/
    PATH.textAnimation = function() {
        var $tlt1 = $('.tlt1'),
            $tlt = $('.tlt');

        if ($tlt1.length) {
            $tlt1.textillate({
                loop: true,
                in: {
                    effect: 'fadeInDown',
                },
                out: {
                    effect: 'flip',
                },
            });
        }
        //
        if ($tlt.length) {
            $tlt.textillate({
                loop: true,
                in: {
                    effect: 'fadeInRight',
                },
                out: {
                    effect: 'fadeOutLeft',
                },
            });
        }
    }

    /******************** CAUSES SLIDER ********************/
    PATH.causesSlider = function() {
        var pswiper = new Swiper('.causes-swiper', {
            slidesPerView: 3,
            spaceBetween: 0,
            freeMode: true,
            speed: 1500,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                }
            }
        });
    }

    /******************** GALLERY FILTER ********************/
    PATH.GalleryFilter = function() {
        var $portfolio_selectors = $('.gallery-filter >li>a');
        if ($portfolio_selectors.length) {
            var $portfolio = $('.gallery-boxes');
            $portfolio.isotope({
                itemSelector: '.gallery-box',
                layoutMode: 'fitRows'
            });
            $portfolio_selectors.on('click', function() {
                $portfolio_selectors.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({
                    filter: selector
                });
                return false;
            });
        }
    }

    /******************** GALLERY LIGHTBOX ********************/
    PATH.GalleryLightBox = function() {
        var $galleryLightBox = $('.gallery-icon');
        if ($galleryLightBox.length) {
            $galleryLightBox.magnificPopup({
                type: 'image',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                fixedContentPos: true,
                delegate: 'a',
                gallery: {
                    enabled: true
                }
            });
        }
    }

    /******************** TESTIMONIAL SLIDER ********************/
    PATH.sliderTestimonial = function() {
            var tswiper = new Swiper('.testimonialSwiper', {
                speed: 1500,
                freeMode: true,
                centeredSlides: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
            });
        }
        /******************** VOLUNTEERS SLIDER ********************/
    PATH.sliderVolunteers = function() {
        var vswiper = new Swiper('.volunteers-swiper', {
            slidesPerView: 4,
            spaceBetween: 0,
            freeMode: true,
            autoplay: {
                delay: 2000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                }
            }
        });
    }

    /* Document ready function */
    $(function() {
        PATH.textAnimation(),
            PATH.MenuClose(),
            PATH.HeaderScroll(),
            PATH.HeaderSticky();
        PATH.GalleryLightBox();
        PATH.sliderTestimonial();
        PATH.sliderVolunteers();
        PATH.heroSlider();
        PATH.causesSlider();
    });

    /* Window on scroll function */
    $(window).on("scroll", function() {
        PATH.HeaderFixed();
    });

    /* Window on load function */
    $(window).on('load', function() {
        PATH.sliderTestimonial();
        PATH.sliderVolunteers();
        PATH.heroSlider();
        PATH.causesSlider();
        PATH.GalleryFilter();
        PATH.preLoader();
    });
})(jQuery);