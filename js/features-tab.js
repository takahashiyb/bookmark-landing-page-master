export function switchTabDisplay() {
  const component = document.querySelector(".section__component-tabs");
  const tabs = document.querySelectorAll(".element__tab");
  const images = document.querySelectorAll(".image__tab");
  const details = document.querySelectorAll(".detail__tab");

  tabs.forEach((element) => {
    element.addEventListener("click", () => {
      component.setAttribute;
      const index = element.dataset.tabIndex;
      let current = component.dataset.tabOpen;
      tabs[index].setAttribute("data-selected", "true");
      tabs[current].setAttribute("data-selected", "false");

      images[current].setAttribute("hidden", "");
      details[current].setAttribute("hidden", "");
      images[current].setAttribute("aria-expanded", "false");
      details[current].setAttribute("aria-expanded", "false");
      images[index].removeAttribute("hidden");
      details[index].removeAttribute("hidden");
      images[index].setAttribute("aria-expanded", "true");
      details[index].setAttribute("aria-expanded", "true");
      component.dataset.tabOpen = index;
    });
  });
}
