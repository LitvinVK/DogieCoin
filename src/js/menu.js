const header = document.querySelector('.header');
const button = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact_block');

button.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('header_active');

    if (header.classList.contains('header_active') && window.screen.width <= 500) {
        menu.style = 'display: flex';
        contact.style = 'display: flex';
    } else if (header.classList.contains('header_active')) {
        menu.style = 'display: flex';
    } else if (window.screen.width <= 500) {
        contact.style = '';
        menu.style = '';
    } else {
        menu.style = '';
    }
});