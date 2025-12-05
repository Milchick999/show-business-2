const burger = document.querySelector('.header__burger-button');
const overlay = document.querySelector('.header__overlay');

burger.addEventListener('click', () => {
  overlay.classList.toggle('active');
  burger.classList.toggle('active');
});пш