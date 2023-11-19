const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible"); //return a string

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true); //this is important and used for both accessibility and styling
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
