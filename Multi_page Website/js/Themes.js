// Theme cahnger

const themeToggler = document.querySelector('.theme-toggler');
const blakcFont = document.querySelector('.header__left');
const button = document.querySelectorAll('.btn');


themeToggler.addEventListener('click', function() {
    document.body.classList.toggle('light-theme-variables');
    
    
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    blakcFont.querySelector('h1').classList.toggle('blackFont');
    blakcFont.querySelector('p').classList.toggle('blackFont');

    button.classList.toggle('light-button');
}) ;