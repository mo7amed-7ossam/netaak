// Slider Component
class Slider {
    constructor(element) {
        this.container = element;
        this.wrapper = element.querySelector('.slider-wrapper');
        this.slides = Array.from(element.querySelectorAll('.slider-slide'));
        this.controls = element.querySelector('.slider-controls');
        this.indicators = element.querySelector('.slider-indicators');
        this.prevButton = element.querySelector('.slider-prev');
        this.nextButton = element.querySelector('.slider-next');
        
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        this.isDragging = false;
        this.startX = 0;
        this.currentX = 0;
        this.slideWidth = 0;
        this.autoplayInterval = null;
        this.isRTL = document.documentElement.dir === 'rtl';
        this.initialTranslateX = 0;
        
        this.init();
    }
    
    init() {
        this.updateSlideWidth();
        this.setupIndicators();
        this.setupEventListeners();
        this.startAutoplay();
        this.updateSlider();
        
        // تحديث عرض الشرائح عند تغيير حجم النافذة
        window.addEventListener('resize', () => {
            this.updateSlideWidth();
            this.updateSlider();
        });
    }
    
    updateSlideWidth() {
        this.slideWidth = this.container.offsetWidth;
        this.slides.forEach(slide => {
            slide.style.width = `${this.slideWidth}px`;
        });
        this.wrapper.style.width = `${this.slideWidth * this.slideCount}px`;
    }
    
    setupIndicators() {
        this.indicators.innerHTML = '';
        this.slides.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'slider-indicator';
            indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
            indicator.addEventListener('click', () => this.goToSlide(index));
            this.indicators.appendChild(indicator);
        });
    }
    
    setupEventListeners() {
        // أزرار التنقل
        this.prevButton.addEventListener('click', () => {
            this.pauseAutoplay();
            this.prevSlide();
            this.startAutoplay();
        });
        
        this.nextButton.addEventListener('click', () => {
            this.pauseAutoplay();
            this.nextSlide();
            this.startAutoplay();
        });
        
        // أحداث اللمس
        this.wrapper.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        this.wrapper.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
        this.wrapper.addEventListener('touchend', this.handleTouchEnd.bind(this));
        
        // أحداث الماوس
        this.wrapper.addEventListener('mousedown', this.handleMouseDown.bind(this));
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        document.addEventListener('mouseup', this.handleMouseUp.bind(this));
        
        // منع السلوك الافتراضي للسحب
        this.wrapper.addEventListener('dragstart', (e) => e.preventDefault());
    }
    
    handleTouchStart(e) {
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
        this.currentX = this.startX;
        this.initialTranslateX = this.currentSlide * this.slideWidth;
        this.pauseAutoplay();
        this.wrapper.style.transition = 'none';
    }
    
    handleTouchMove(e) {
        if (!this.isDragging) return;
        
        this.currentX = e.touches[0].clientX;
        const diff = this.currentX - this.startX;
        const translateX = this.isRTL ? 
            this.initialTranslateX + diff : 
            this.initialTranslateX - diff;
        
        this.wrapper.style.transform = `translateX(${translateX}px)`;
    }
    
    handleTouchEnd() {
        if (!this.isDragging) return;
        
        const diff = this.currentX - this.startX;
        const threshold = this.slideWidth * 0.2;
        
        if (Math.abs(diff) > threshold) {
            if (this.isRTL) {
                diff > 0 ? this.nextSlide() : this.prevSlide();
            } else {
                diff > 0 ? this.prevSlide() : this.nextSlide();
            }
        } else {
            this.updateSlider();
        }
        
        this.isDragging = false;
        this.startAutoplay();
    }
    
    handleMouseDown(e) {
        e.preventDefault();
        this.isDragging = true;
        this.startX = e.clientX;
        this.currentX = this.startX;
        this.initialTranslateX = this.currentSlide * this.slideWidth;
        this.pauseAutoplay();
        this.wrapper.style.cursor = 'grabbing';
        this.wrapper.style.transition = 'none';
    }
    
    handleMouseMove(e) {
        if (!this.isDragging) return;
        
        this.currentX = e.clientX;
        const diff = this.currentX - this.startX;
        const translateX = this.isRTL ? 
            this.initialTranslateX + diff : 
            this.initialTranslateX - diff;
        
        this.wrapper.style.transform = `translateX(${translateX}px)`;
    }
    
    handleMouseUp() {
        if (!this.isDragging) return;
        
        const diff = this.currentX - this.startX;
        const threshold = this.slideWidth * 0.2;
        
        if (Math.abs(diff) > threshold) {
            if (this.isRTL) {
                diff > 0 ? this.nextSlide() : this.prevSlide();
            } else {
                diff > 0 ? this.prevSlide() : this.nextSlide();
            }
        } else {
            this.updateSlider();
        }
        
        this.isDragging = false;
        this.wrapper.style.cursor = 'grab';
        this.startAutoplay();
    }
    
    updateSlider() {
        const translateX = this.isRTL ? 
            this.currentSlide * this.slideWidth : 
            -this.currentSlide * this.slideWidth;
        
        this.wrapper.style.transform = `translateX(${translateX}px)`;
        this.wrapper.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // تحديث المؤشرات
        const indicators = this.indicators.querySelectorAll('.slider-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    goToSlide(index) {
        if (index < 0) index = this.slideCount - 1;
        if (index >= this.slideCount) index = 0;
        
        this.currentSlide = index;
        this.updateSlider();
    }
    
    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }
    
    prevSlide() {
        this.goToSlide(this.currentSlide - 1);
    }
    
    startAutoplay() {
        this.pauseAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// تهيئة السلايدر
document.addEventListener('DOMContentLoaded', () => {
    const sliderElement = document.querySelector('.slider-container');
    if (sliderElement) {
        new Slider(sliderElement);
    }
});

// نظام التقييمات
class Rating {
    constructor(element) {
        this.container = element;
        this.stars = element.querySelectorAll('.rating-star');
        this.value = 0;
        this.init();
    }

    init() {
        this.stars.forEach((star, index) => {
            star.addEventListener('click', () => this.setRating(index + 1));
            star.addEventListener('mouseover', () => this.hoverRating(index + 1));
            star.addEventListener('mouseout', () => this.resetHover());
        });
    }

    setRating(value) {
        this.value = value;
        this.updateStars();
    }

    hoverRating(value) {
        this.stars.forEach((star, index) => {
            star.classList.toggle('active', index < value);
        });
    }

    resetHover() {
        this.updateStars();
    }

    updateStars() {
        this.stars.forEach((star, index) => {
            star.classList.toggle('active', index < this.value);
        });
    }
}

// نظام الإشعارات
class Notification {
    static show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, duration);
    }
}

// نظام المحادثة
class Chat {
    constructor(element) {
        this.container = element;
        this.messages = element.querySelector('.chat-messages');
        this.input = element.querySelector('.chat-input');
        this.sendButton = element.querySelector('.chat-send');
        this.init();
    }

    init() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        this.addMessage(message, 'sent');
        this.input.value = '';
        this.scrollToBottom();
    }

    addMessage(text, type) {
        const message = document.createElement('div');
        message.className = `chat-message message-${type}`;
        message.textContent = text;
        
        this.messages.appendChild(message);
    }

    scrollToBottom() {
        this.messages.scrollTop = this.messages.scrollHeight;
    }
}

// نظام الفلترة
class Filter {
    constructor(element) {
        this.container = element;
        this.filters = element.querySelectorAll('.filter-option');
        this.init();
    }

    init() {
        this.filters.forEach(filter => {
            filter.addEventListener('change', () => this.applyFilters());
        });
    }

    applyFilters() {
        const activeFilters = Array.from(this.filters)
            .filter(f => f.checked)
            .map(f => f.value);
        
        // تنفيذ الفلترة هنا
        console.log('Active filters:', activeFilters);
    }
}

// نظام الخريطة
class LocationPicker {
    constructor(element) {
        this.container = element;
        this.map = null;
        this.marker = null;
        this.init();
    }

    init() {
        // تهيئة الخريطة هنا
        this.setupMap();
        this.setupEvents();
    }

    setupMap() {
        // كود تهيئة الخريطة
    }

    setupEvents() {
        // إعداد أحداث الخريطة
    }

    setLocation(lat, lng) {
        // تحديث موقع العلامة على الخريطة
    }
}

// تهيئة المكونات
document.addEventListener('DOMContentLoaded', () => {
    // تهيئة التقييمات
    document.querySelectorAll('.rating').forEach(rating => {
        new Rating(rating);
    });

    // تهيئة المحادثات
    document.querySelectorAll('.chat-container').forEach(chat => {
        new Chat(chat);
    });

    // تهيئة الفلاتر
    document.querySelectorAll('.filter-section').forEach(filter => {
        new Filter(filter);
    });

    // تهيئة منتقي الموقع
    document.querySelectorAll('.location-picker').forEach(picker => {
        new LocationPicker(picker);
    });
}); 