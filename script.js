// Desktop Navigation
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

// Mobile Menu
const mobileMenu = document.querySelector(".mobile-menu")
const mobileFeaturesMenu = document.querySelector(
  ".mobile-menu .features.dropdown-menu"
)
const mobileFeaturesArrowDown = document.querySelector(
  ".mobile-menu .features i:first-of-type"
)
const mobileFeaturesArrowUp = document.querySelector(
  ".mobile-menu .features i:last-of-type"
)
const mobileFeaturesParag = document.querySelector(".mobile-menu .features p")
const mobileCompanyMenu = document.querySelector(
  ".mobile-menu .company.dropdown-menu"
)
const mobileCompanyArrowDown = document.querySelector(
  ".mobile-menu .company i:first-of-type"
)
const mobileCompanyArrowUp = document.querySelector(
  ".mobile-menu .company i:last-of-type"
)
const mobileCompanyParag = document.querySelector(".mobile-menu .company p")

document.addEventListener("click", (e) => {
  if (e.target.matches(".mobile-menu-icon img")) {
    mobileMenu.classList.toggle("invisible")
  }

  if (
    e.target.matches(".mobile-menu .close-menu-icon img") ||
    e.target.matches(".mobile-menu .dropdown-menu p") ||
    e.target.matches(".mobile-menu .careers p") ||
    e.target.matches(".mobile-menu .about p") ||
    e.target.matches(".mobile-menu .registration p")
  ) {
    mobileMenu.classList.toggle("invisible")
    mobileFeaturesMenu.classList.add("invisible")
    mobileCompanyMenu.classList.add("invisible")
    mobileFeaturesParag.classList.remove("black")
    mobileFeaturesArrowUp.classList.remove("black")
    mobileCompanyParag.classList.remove("black")
    mobileCompanyArrowUp.classList.remove("black")
    mobileFeaturesArrowUp.classList.add("invisible")
    mobileCompanyArrowUp.classList.add("invisible")
    mobileFeaturesArrowDown.classList.remove("invisible")
    mobileCompanyArrowDown.classList.remove("invisible")
    return
  }

  if (
    e.target.matches(".mobile-menu .features p") ||
    e.target.matches(".mobile-menu .features i")
  ) {
    mobileFeaturesMenu.classList.toggle("invisible")
    mobileFeaturesArrowDown.classList.toggle("invisible")
    mobileFeaturesArrowUp.classList.toggle("invisible")

    mobileFeaturesParag.classList.toggle("black")
    mobileFeaturesArrowUp.classList.toggle("black")
  }

  if (
    e.target.matches(".mobile-menu .company p") ||
    e.target.matches(".mobile-menu .company i")
  ) {
    mobileCompanyMenu.classList.toggle("invisible")
    mobileCompanyArrowDown.classList.toggle("invisible")
    mobileCompanyArrowUp.classList.toggle("invisible")

    mobileCompanyParag.classList.toggle("black")
    mobileCompanyArrowUp.classList.toggle("black")
  }
})
