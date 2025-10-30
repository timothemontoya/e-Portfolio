// --- Apparition au scroll ---
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add("visible");
  });
});

// --- Thème clair/sombre ---
const toggleBtn = document.getElementById("theme-toggle");
const userPref = localStorage.getItem("theme");
if (userPref === "dark") document.body.classList.add("dark");
toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
});

// --- Diaporama automatique ---
const slides = document.querySelectorAll(".slideshow img");
let current = 0;
let interval = setInterval(nextSlide, 4000);
function nextSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}
const slideshow = document.querySelector(".slideshow");
slideshow.addEventListener("mouseenter", () => clearInterval(interval));
slideshow.addEventListener("mouseleave", () => interval = setInterval(nextSlide, 4000));

// --- Menu burger ---
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    navLinks.classList.remove("open");
  })
);

const d = new Date(document.lastModified);
const f = d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'});
document.getElementById('last-updated').textContent = `Last updated • ${f}`;
