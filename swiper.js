document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mySwiper", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        centeredSlides: true,
        grid: { rows: 1 },
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        centeredSlides: false,
        grid: { rows: 1 },
      },
      870: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        centeredSlides: false,
        grid: { rows: 1 },
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        centeredSlides: false,
        grid: { rows: 2, fill: "row" },
      },
    },
  });
});