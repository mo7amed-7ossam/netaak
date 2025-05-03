$(document).ready(function () {
    // Loading Indicator
    const showLoading = () => {
        $('#loadingIndicator').fadeIn();
    };

    const hideLoading = () => {
        $('#loadingIndicator').fadeOut();
    };

    // Search Functionality
    $('.search-form').on('submit', function (e) {
        e.preventDefault();
        const searchQuery = $('.search-input').val().trim();
        if (searchQuery) {
            showLoading();
            setTimeout(() => {
                window.location.href = `search-results.html?q=${encodeURIComponent(searchQuery)}`;
            }, 500);
        }
    });

    // Category Cards Animation
    const animateCards = () => {
        $('.category-card').each(function (index) {
            $(this).css({
                'animation': `fadeIn 0.5s ease forwards ${index * 0.1}s`,
                'opacity': '0'
            });
        });
    };

    // Scroll to Top Button
    const scrollToTop = () => {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });

        $('.scroll-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    };

    // Mobile Menu Toggle
    const initMobileMenu = () => {
        $('.mobile-menu-toggle').click(function () {
            $('.nav-buttons').slideToggle();
        });

        $(window).resize(function () {
            if ($(window).width() > 768) {
                $('.nav-buttons').show();
            }
        });
    };

    // Initialize Functions
    const init = () => {
        hideLoading();
        animateCards();
        scrollToTop();
        initMobileMenu();
    };

    // Run initialization
    init();

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Add keyframe animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        .fade-in {
            opacity: 0;
            animation: fadeIn 0.5s ease forwards;
        }
        .category-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .category-card:hover {
            
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
    `;
    document.head.appendChild(style);

    // Scroll Animations with Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Add animation based on element type
                if (element.classList.contains('hero-stat')) {
                    animateNumbers();
                } else if (element.classList.contains('about-content')) {
                    element.classList.add('fade-in');
                } else if (element.classList.contains('feature-card')) {
                    element.classList.add('fade-in');
                } else if (element.classList.contains('category-card')) {
                    // تأخير ظهور كل بطاقة
                    const delay = Array.from(element.parentElement.children).indexOf(element) * 100;
                    setTimeout(() => {
                        element.classList.add('fade-in');
                    }, delay);
                }

                // Stop observing after animation
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.about-content, .category-card, .feature-card, .hero-stat').forEach(element => {
        observer.observe(element);
    });

    // Number Animation
    function animateNumbers() {
        const stats = document.querySelectorAll('.stat-number');

        stats.forEach((stat, index) => {
            if (!stat.classList.contains('animated')) {
                const target = parseInt(stat.textContent);
                let current = 0;
                const duration = 1500;
                const steps = 60;
                const increment = target / steps;
                const stepTime = duration / steps;

                // Add delay based on index
                setTimeout(() => {
                    const updateNumber = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.floor(current) + '+';
                            setTimeout(updateNumber, stepTime);
                        } else {
                            stat.textContent = target + '+';
                            stat.classList.add('animated');
                        }
                    };

                    updateNumber();
                }, index * 200);
            }
        });
    }

    // التحكم في القوائم المنسدلة
    $(document).click(function(event) {
        if (!$(event.target).closest('.notification-icon, .user-menu').length) {
            $('.dropdown').removeClass('active');
        }
    });

    // فتح وإغلاق قائمة الإشعارات
    $('.notification-icon').click(function(e) {
        e.stopPropagation();
        $('.user-menu .dropdown').removeClass('active');
        $(this).find('.dropdown').toggleClass('active');
    });

    // فتح وإغلاق قائمة المستخدم
    $('.user-menu').click(function(e) {
        e.stopPropagation();
        $('.notification-icon .dropdown').removeClass('active');
        $(this).find('.dropdown').toggleClass('active');
    });
}); 


