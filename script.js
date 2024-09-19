featuresMenu = document.querySelector(".features .dropdown-menu")
featuresArrowDown = document.querySelector(".features i:first-of-type")
featuresArrowUp = document.querySelector(".features i:last-of-type")
featuresParag = document.querySelector(".features p:first-child")

companyMenu = document.querySelector(".company .dropdown-menu")
companyArrowDown = document.querySelector(".company i:first-of-type")
companyArrowUp = document.querySelector(".company i:last-of-type")
companyParag = document.querySelector(".company p:first-child")

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

  if (
    e.target.matches(".company > p:first-child") ||
    e.target.matches(".company i")
  ) {
    companyMenu.classList.toggle("invisible")
    companyArrowDown.classList.toggle("invisible")
    companyArrowUp.classList.toggle("invisible")

    companyParag.classList.toggle("black")
    companyArrowUp.classList.toggle("black")
  }

  if (e.target.matches(".company .dropdown-menu p")) {
    companyMenu.classList.toggle("invisible")
    companyArrowDown.classList.toggle("invisible")
    companyArrowUp.classList.toggle("invisible")

    companyParag.classList.toggle("black")
    companyArrowUp.classList.toggle("black")
  }
})
