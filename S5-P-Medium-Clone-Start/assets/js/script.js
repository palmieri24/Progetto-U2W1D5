window.addEventListener("scroll", function () {
  const Scroll = window.scrollY;
  const containerNav = document.getElementsByClassName("nav-container")[0];
  const nav = document.getElementsByTagName("nav")[0];
  const btnNav = document.getElementById("green-button");

  if (Scroll > 320) {
    containerNav.classList.add("navWhite");
    nav.classList.add("navWhite");
    btnNav.classList.add("btnGreen");
  } else {
    containerNav.classList.remove("navWhite");
    nav.classList.remove("navWhite");
    btnNav.classList.remove("btnGreen");
  }
});
