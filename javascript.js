const hamberger = document.querySelector('.hamburger');
const navlink = document.querySelector('.menu');
const closeButton = document.querySelector('.close-btn');

hamberger.addEventListener('click', () => {
  navlink.style.display = 'initial';
});

closeButton.addEventListener('click', () => {
  navlink.style.display = 'none';
});

navlink.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navlink.style.display = 'none';
  }
});
