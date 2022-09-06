import A11YSlider from 'a11y-slider'

// Navigation
const primaryHeader = document.querySelector(".primary-header");
const mobileNavButtonClose = document.querySelector(".icon-close");
const mobileNavButtonHumbergur = document.querySelector(".icon-humburger");
const buttonToggle = document.querySelector('.mobile-nav-toggle');
const navToggle = document.querySelector('.primary-navigation');

buttonToggle.addEventListener('click', (e) => {
    navToggle.hasAttribute('data-visible') ?
        buttonToggle.setAttribute('aria-expanded', false) :
        buttonToggle.setAttribute('aria-expanded', true);
    navToggle.toggleAttribute('data-visible');
    if (!primaryHeader.hasAttribute("data-overlay")) {
        mobileNavButtonHumbergur.style = "display:none";
        mobileNavButtonClose.style = "display:block";
    } else {
        mobileNavButtonHumbergur.style = "display:block";
        mobileNavButtonClose.style = "display:none";
    }
    primaryHeader.toggleAttribute("data-overlay");
    const overlay = document.querySelector("[data-overlay]");
    if (overlay) {
        overlay.addEventListener('click', () => {
            console.log("clicked");
        })
    }
});

// Slider testimonials
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
        550: {
            dots: false
        }
    },
    autoplay: true,
    autoplaySpeed: 2200
});