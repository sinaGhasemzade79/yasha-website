let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // scrolling down
    navbar.classList.add("hide");
  } else {
    // scrolling up
    navbar.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a"); // select all <a> in nav

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
