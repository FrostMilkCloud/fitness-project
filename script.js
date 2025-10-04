document.addEventListener("DOMContentLoaded", function () {
  const sliders = [
    {
      selector: "#events-slider",
      options: {
        type: "loop",
        perPage: 3,
        gap: "15px",
        arrows: true,
        pagination: true,
        breakpoints: {
          360: { perPage: 1 },
          768: { perPage: 2 },
          1024: { perPage: 2 },
        },
      },
    },
    {
      selector: "#gallery-slider",
      options: {
        type: "loop",
        perPage: 4,
        gap: "15px",
        pagination: true,
        arrows: true,
        breakpoints: {
          1200: { perPage: 3 },
          768: { perPage: 2 },
          480: { perPage: 1 },
        },
      },
    },

    {
      selector: "#icon-slider",
      options: {
        type: "loop",
        perPage: 6,
        pagination: false,
        arrows: true,
        breakpoints: {
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
        },
      },
    },
  ];

  sliders.forEach(({ selector, options }) => {
    const el = document.querySelector(selector);
    if (el) new Splide(el, options).mount();
  });
});
