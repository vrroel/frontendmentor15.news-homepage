function initMenuMobile() {
  const menuMobile = document.querySelector(".header-nav");
  const menuOpen = document.querySelector(".menu-mobile-open");
  const menuClose = document.querySelector(".menu-mobile-close");

  if (menuOpen) {
    function openCloseMenu() {
      menuMobile.classList.toggle("active");
    }
    menuOpen.addEventListener("click", openCloseMenu);
    menuClose.addEventListener("click", openCloseMenu);
  }
}
initMenuMobile();
