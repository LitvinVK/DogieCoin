const tabs = document.querySelectorAll('.tabs__element');
const start = document.querySelector('.start');
const title = document.querySelector('.info__title');
const text = document.querySelector('.info__text');
start.style.background = "linear-gradient(to bottom, rgba(19, 19, 19, 0) 40%, #131313 100%), url(./assets/background_earth.jpg) bottom";

tabs.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        tabs.forEach((item) => {
            item.classList.remove('active_tab');
        });
        tabs[i].classList.add('active_tab');

        if (i === 0) {
            title.innerHTML = '<h1>Полет Илона Маска<br>и Dogie coin</h1>';
            text.innerHTML = 'В прошлый четверг все офигели от полета <span>Dogie coin</span> на марс';
            start.style = 'background: linear-gradient(to bottom, rgba(19, 19, 19, 0) 40%, #131313 100%), url(./assets/background_earth.jpg) bottom';
        } else if (i === 1) {
            title.innerHTML = '<h1>Dogie coin<br>упал</h1>';
            text.innerHTML = 'Все в шоке, я потерял все деньги';
            start.style = 'background: linear-gradient(to bottom, rgba(19, 19, 19, 0) 40%, #131313 100%), url(./assets/background_car.jpg) bottom';
        } else if (i === 2) {
            title.innerHTML = '<h1>Эпическое возвращения<br>на хаи</h1>';
            text.innerHTML = 'Все в шоке, я снова богат';
            start.style = 'background: linear-gradient(to bottom, rgba(19, 19, 19, 0) 40%, #131313 100%), url(./assets/background_money.jpg) bottom';
        }
    });
});