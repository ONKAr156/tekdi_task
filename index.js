
const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next"

    },
    autoplay: {
        // delay: 2500,
        reverseDirection: false,
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
});
const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay:{
        delay:1500,
        reverseDirection:false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next"

    },
    autoplay: {
        delay: 2500,
        reverseDirection: false,
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
});

// const navbar = document.querySelector('#navbar');
// let top = navbar.offsetTop;
// function stickynavbar() {
//   if (window.scrollY >= top) {    
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');    
//   }
// }
// window.addEventListener('scroll', stickynavbar);

