const headline = document.getElementById('headline');
headline.addEventListener('click', () => {
  document.querySelector('h1').textContent = 'Have a Good Time!'
});

const button = document.querySelector('.button');
button.addEventListener('click' , () => {
  const container = document.querySelector('.container1');
  container.style.display = 'block';
});

const hamMenu = document.querySelector('.hamburger-menu');
const navbarLinks = document.querySelector('.navbar-links');
hamMenu.addEventListener('click' , () => {
  hamMenu.classList.toggle('active');
  navbarLinks.classList.toggle('active');
});

