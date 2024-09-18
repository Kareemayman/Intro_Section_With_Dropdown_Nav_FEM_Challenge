featuresMenu = document.querySelector(".features .dropdown-menu")
featuresArrowDown = document.querySelector(".features i:first-of-type")
featuresArrowUp = document.querySelector(".features i:last-of-type")
featuresParag = document.querySelector(".features p:first-child")

document.addEventListener("click", (e) => {
  if (
    e.target.matches(".features p:first-child") ||
    e.target.matches(".features i")
  ) {
    featuresMenu.classList.toggle("invisible")
    featuresArrowDown.classList.toggle("invisible")
    featuresArrowUp.classList.toggle("invisible")

    featuresParag.classList.toggle("black")
    featuresArrowUp.classList.toggle("black")
  }

  if (
    e.target.matches(".features .dropdown-menu > div p") ||
    e.target.matches(".features .dropdown-menu > div img")
  ) {
    featuresMenu.classList.toggle("invisible")
    featuresArrowDown.classList.toggle("invisible")
    featuresArrowUp.classList.toggle("invisible")

    featuresParag.classList.toggle("black")
    featuresArrowUp.classList.toggle("black")
  }

})
