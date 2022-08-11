document.addEventListener("DOMContentLoaded", function () {
    scrollMovement();
});

function mainSwiper(el) {
    let swiper = new Swiper(el, {    
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        effect: 'fade',
        loop: true,
        watchSlidesProgress: true
    });
}

function tabAction(tabItem, tabContent) {
    const TAB_MENU = document.querySelectorAll(tabItem);
    const TAB_CONTENT = document.querySelectorAll(tabContent);

    TAB_MENU.forEach((item) => {
        item.addEventListener('click', tabHandler);
    });

    function tabHandler(item) {
        const tabTarget = item.currentTarget;
        const target = tabTarget.dataset.tab;
        
        TAB_MENU.forEach((menu) => {
            menu.classList.remove('active');
        });
        
        TAB_CONTENT.forEach((target) => {
            target.classList.remove('active');
        });

        document.querySelector('#' + target).classList.add('active');
        tabTarget.classList.add('active');
        
    }
}

function scrollMovement() {
    const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true
	});
}
