const btnMobile = document.getElementById("btn-mobile");
const btnMobileClose = document.getElementById('btn-close');

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle('active');
}

btnMobile.addEventListener("click", toggleMenu);
btnMobileClose.addEventListener("click", toggleMenu);