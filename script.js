// Sticky Navigation Bar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Hamburger Menu for Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Dynamic Image Gallery Loading
const galleryImages = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];

const galleryContainer = document.querySelector(".gallery");

galleryImages.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Gallery Image";
  img.classList.add("gallery-image");
  galleryContainer.appendChild(img);
});

// Form Validation
const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
  const email = form.querySelector("#email").value;
  const error = form.querySelector(".error-message");

  if (!validateEmail(email)) {
    e.preventDefault(); // Prevent form submission
    error.textContent = "Please enter a valid email.";
  } else {
    error.textContent = "";
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Back-to-Top Button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Modal Popups for Images
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");
const images = document.querySelectorAll(".gallery img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Image Hover Effects
const galleryImgs = document.querySelectorAll(".gallery img");

galleryImgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1)";
    img.style.transition = "transform 0.3s";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
