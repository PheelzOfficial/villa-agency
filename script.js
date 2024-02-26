const preloader = document.querySelector(".js-preloader");
let lastScroll = 0;
let ticking = false;

const nav = document.querySelector(".subheading-container");

function handleScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScroll && scrollTop > 100) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

  lastScroll = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });

    ticking = true;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloader.classList.add("loaded");
  }, 1500);
});
