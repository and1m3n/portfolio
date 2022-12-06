const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});
close.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counter = document.querySelectorAll('.persent__volume');
const line = document.querySelectorAll('.percent__span');

counter.forEach((item, i) => {
  line[i].style.width = item.innerHTML;
});
