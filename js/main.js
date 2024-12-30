"use strict";

// add class active -----------
let navlinks = document.querySelectorAll(".header .list li a");

navlinks.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".header .list li a.active").classList.remove("active");
    item.classList.add("active");
  });
});

$(`document`).ready(() => {
  // partners
  $(".main-section .owl-carousel").owlCarousel({
    loop: true,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  $(".our-partners .owl-carousel").owlCarousel({
    loop: true,
    rtl: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: true,
    navText: [
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".customer .owl-carousel").owlCarousel({
    loop: true,
    rtl: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: true,
    navText: [
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
});

function createFaqSection() {
  fetch("/js/data.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("accordionItems");
      container.innerHTML = data
        .map(
          (item, i) => `
        <div class="accordion-item border-0 border-bottom mb-2">
          <h2 class="accordion-header" id="heading${i + 1}">
            <button
              class="accordion-button ${i === 0 ? "" : "collapsed"}"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse${i + 1}"
              aria-expanded="${i === 0 ? "true" : "false"}"
              aria-controls="collapse${i + 1}">
              ${item.question}
            </button>
          </h2>
          <div id="collapse${i + 1}" class="accordion-collapse collapse ${i === 0 ? "show" : ""}" aria-labelledby="heading${
            i + 1
          }" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              ${item.answer}
            </div>
          </div>
        </div>
      `
        )
        .join("");
    })
    .catch((err) => console.error("Error loading data:", err));
}
createFaqSection();
