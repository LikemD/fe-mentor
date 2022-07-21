const menuOpenIcon = document.getElementById('icon-open-menu')
const menuCloseIcon = document.getElementById('icon-close-menu')
const navLink = document.querySelectorAll('.nav-link')
const featureDropdownLink = document.querySelector('#feature-dropdown')
const featureDropdownButton = document.querySelector('#feature-dropdown-btn')
const companyDropdownLink = document.querySelector('#company-dropdown')
const companyDropdownButton = document.querySelector('#company-dropdown-btn')
const overlay = document.querySelector('.overlay-for-mobile')
const overlayContent = document.querySelector('.overlay-content')

menuOpenIcon.addEventListener('click', function() {
  overlay.style.width = '100vw';
  overlayContent.style.width = '66.666%'
  overlayContent.style.paddingLeft = '1.5rem'
  overlayContent.style.paddingRight = '1.5rem'
  menuCloseIcon.style.display = 'block'
  menuCloseIcon.style.zIndex = '2'
})

overlay.addEventListener('click', function () {
  overlay.style.width = '0';
  overlayContent.style.width = '0'
  overlayContent.style.paddingLeft = '0'
  overlayContent.style.paddingRight = '0'
  menuCloseIcon.style.display = 'none'
})

featureDropdownLink.addEventListener('mouseover', () => {
  featureDropdownButton.innerHTML = 'Features <img src="images/icon-arrow-up.svg" alt="icon-arrow-up" />'
})

featureDropdownLink.addEventListener('mouseout', () => {
  featureDropdownButton.innerHTML = 'Features <img src="images/icon-arrow-down.svg" alt="icon-arrow-down" />'
})

companyDropdownLink.addEventListener('mouseover', () => {
  companyDropdownButton.innerHTML = 'Company <img src="images/icon-arrow-up.svg" alt="icon-arrow-up" />'
})

companyDropdownLink.addEventListener('mouseout', () => {
  companyDropdownButton.innerHTML = 'Company <img src="images/icon-arrow-down.svg" alt="icon-arrow-down" />'
})

window.addEventListener('resize', () => { if (window.innerWidth > 1025) {
  overlay.style.width = '0'
  overlayContent.style.width = '0'
  overlayContent.style.paddingLeft = '0'
  overlayContent.style.paddingRight = '0'
  menuCloseIcon.style.display = 'none'
}})




