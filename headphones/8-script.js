var hamburgerMenu = document.getElementById("hamburger-menu");

var nav = document.querySelector("nav");

var navLinks = document.querySelectorAll(".nav-links a");

function toggleMenu() {
  // Add or remove the 'active' class
  hamburgerMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

// When user clicks the hamburger button, toggle the menu
hamburgerMenu.addEventListener("click", toggleMenu);

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
    nav.classList.remove("active");
  });
}
