// this file is only for hamburger menu

const hamburger  = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('active')
})