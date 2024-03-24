var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  freeMode: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      // when window width is <= 576px
      576: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      // when window width is <= 768px
      768: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      // when window width is <= 992px
      992: {
          slidesPerView: 3,
          spaceBetween: 30
      }
      // add more breakpoints as needed
  }
});
