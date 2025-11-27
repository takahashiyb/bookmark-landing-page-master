export function menuButton() {
  const buttonMenu = document.querySelector(".button__header-menu");
  const dialog = document.querySelector(".dialog");
  const buttonClose = document.querySelector(".button__close");
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector(".section__footer");
  const attribution = document.querySelector(".section__attribution");

  buttonMenu.addEventListener("click", () => {
    header.setAttribute("inert", "");
    main.setAttribute("inert", "");
    footer.setAttribute("inert", "");
    attribution.setAttribute("inert", "");

    dialog.show();
  });

  buttonClose.addEventListener("click", () => {
    header.removeAttribute("inert");
    main.removeAttribute("inert");
    footer.removeAttribute("inert");
    attribution.removeAttribute("inert");

    dialog.close();
  });

  const mediaQuery = window.matchMedia("(min-width: 840px)");

  function handleChange(e) {
    if (e.matches && dialog.open) {
      header.removeAttribute("inert");
      main.removeAttribute("inert");
      footer.removeAttribute("inert");
      attribution.removeAttribute("inert");

      dialog.close();
    }
  }

  mediaQuery.addEventListener("change", handleChange);
}
