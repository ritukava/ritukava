var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
  },

  breakpoints: {
// when window width is >= 320px
      280: {
      slidesPerView: 1,
      spaceBetween: 20
      },
      320: {
      slidesPerView: 1,
      spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
      slidesPerView: 1,
      spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
      slidesPerView: 1,
      spaceBetween: 30
      },
      800: {
      slidesPerView: 2,
      spaceBetween: 30
      }
  }
});

var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 5,
  spaceBetween: 15,
  loop: true,
  autoplay: {
  delay: 1500,
  disableOnInteraction: false,
  },

  breakpoints: {
    // when window width is >= 320px
         280: {
          slidesPerView: 1,
          spaceBetween: 20
          },
          320: {
          slidesPerView: 1,
          spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
          slidesPerView: 1,
          spaceBetween: 20
          },
          // when window width is >= 640px
          640: {
          slidesPerView: 2,
          spaceBetween: 30
          },
          800: {
          slidesPerView: 5,
          spaceBetween: 30
          }
      }
});