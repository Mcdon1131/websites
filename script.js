const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

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
