const featuresBtn = document.querySelector('.features-top')
const featuresContainer = document.querySelector('.features-bottom ul')
const companyBtn = document.querySelector('.company-top')
const companyContainer = document.querySelector('.company-bottom ul')
const featuresArrow = document.querySelector('.features-top img')
const companyArrow = document.querySelector('.company-top img')
const hamburger = document.querySelector('.nav-hamburger')
const close = document.querySelector('.nav-close')
const mobileMenu = document.querySelector('.nav-links')

featuresBtn.addEventListener('click', () => {
  featuresArrow.style.transform = 'rotate(180deg)'
  featuresContainer.classList.toggle('show')
})

companyBtn.addEventListener('click', () => {
  companyArrow.style.transform = 'rotate(180deg)'
  companyContainer.classList.toggle('show')
})

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('show')
})

close.addEventListener('click', () => {
  mobileMenu.classList.remove('show')
})
