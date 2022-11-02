# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Links

- Solution URL: [GibHub](https://github.com/vrroel/frontendmentor15.news-homepage)
- Live Site URL: [GitHub Pages](https://vrroel.github.io/frontendmentor15.news-homepage)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript (Mobile Menu)

### Some codes used

- For the background of the Mobile menu.

```css
.header-nav {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75) 33%,
    rgb(255, 255, 255) 0
  );
}
```

- For the Mobile Menu

```js
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
```

## Author

- LinkedIn - [@Alexis Villarroel](https://www.linkedin.com/in/alexis-villarroel/)
- GitHub Pages - [Alexis Villarroel](https://github.com/vrroel)
- Frontend Mentor - [@vrroel](https://www.frontendmentor.io/profile/vrroel)