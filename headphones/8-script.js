const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", isOpen);
});
