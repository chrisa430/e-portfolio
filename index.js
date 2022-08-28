let contrastToggle = false;

AOS.init(); // INIT AOS PLUGIN



function toggleContrast() {
  // LIGHT/DARK MODE TOGGLER
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}