// swiper.js - Updated for Technobrain Style Sliders

document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const heroSwiper = new Swiper('.heroSwiper', {
        direction: 'horizontal',
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function() {
                animateProgressBar(this);
            },
            slideChange: function() {
                animateProgressBar(this);
            }
        }
    });
    
    // Logo Carousel
    const logoSwiper = new Swiper('.logoSwiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 8,
            }
        }
    });
    
    // Progress bar animation
    function animateProgressBar(swiper) {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            
            setTimeout(() => {
                progressBar.style.transition = `width ${swiper.params.autoplay.delay - 100}ms linear`;
                progressBar.style.width = '100%';
            }, 100);
        }
    }
    
    // Pause hero slider on hover
    const heroContainer = document.querySelector('.heroSwiper');
    if (heroContainer) {
        heroContainer.addEventListener('mouseenter', () => {
            heroSwiper.autoplay.stop();
        });
        
        heroContainer.addEventListener('mouseleave', () => {
            heroSwiper.autoplay.start();
        });
    }
    
    // Testimonial Slider (if exists)
    const testimonialSwiper = document.querySelector('.testimonialSwiper');
    if (testimonialSwiper) {
        const testimonialSlider = new Swiper('.testimonialSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            }
        });
    }
});