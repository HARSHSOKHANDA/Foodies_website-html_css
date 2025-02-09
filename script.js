// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// counter design

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start;
    (increment = end > start ? 1 : -1),
      (step = Math.abs(Math.floor(duration / range))),
      (timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step));
  }
  counter("counter1", 0, 1287, 3000);
  counter("counter2", 100, 5786, 2500);
  counter("counter3", 0, 1440, 3000);
  counter("counter4", 0, 7110, 3000);
});

// Popup Button When I Scroll down button then show the button

// const scrollButton = document.getElementById("scrollToTopBtn");
// function toggleScrollButton() {
//   const totalPageHeight = document.documentElement.scrollHeight;
//   const visibleWindowHeight = window.innerHeight;
//   const scrolledDistance = window.scrollY;
//   if (scrolledDistance + visibleWindowHeight >= totalPageHeight - 10) {
//     scrollButton.style.display = "block";
//   } else {
//     scrollButton.style.display = "none";
//   }
// }
// window.addEventListener("scroll", toggleScrollButton);
// scrollButton.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });




// Get the button element from the HTML
const scrollButton = document.getElementById("scrollToTopBtn");
// Function to show or hide the button based on scroll position
function toggleScrollButton() {
  const pageHeight = window.innerHeight; // Height of one full page (visible area)
  const scrolledDistance = window.scrollY; // How much the user has scrolled

  // Check if the user has scrolled at least two pages down
  if (scrolledDistance >= pageHeight * 2) {
    scrollButton.style.display = "block"; // Show the button
  } else {
    scrollButton.style.display = "none"; // Hide the button
  }
}

// Listen for when the user scrolls and call the function
window.addEventListener("scroll", toggleScrollButton);

// When the button is clicked, scroll back to the top
scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to the top
});






