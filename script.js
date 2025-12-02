const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = e.target.getAttribute("href").slice(1);

    sections.forEach((section) => {
      section.classList.toggle("visible", section.id === targetId);
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const current = window.scrollY;
  const direction = Math.sign(current - lastScroll);
  if (direction !== 0) {
    nav.animate(
      { transform: "translateY(0)" },
      { duration: 300, fill: "both" }
    );
  }
});
