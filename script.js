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

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.transform = "translateY(0)";
  } else {
    nav.transform = "translateY(-100px)";
  }
});
