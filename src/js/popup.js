const buttons = document.querySelectorAll('.popup_button');

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const el = document.createElement('div');
        el.className = 'popup';
        el.innerHTML = `
            <div class="popup__body">
                <img src="./assets/moon.png" alt="moon">
                <form action="" class="popup__form form">
                    <div class="form__title title"><h1>Оставьте заявку</h1></div>
                    <div class="form__text">Оставьте заявку и наш менеджер свяжется с вами<br>
                        в течение 10-15 минут</div>
                    <input type="text" placeholder="Ваше имя*">
                    <input type="text" placeholder="MAGWAI@info.ru">
                    <input type="text" placeholder="+7(___)">
                    <input type="text" placeholder="Ваш вопрос*">
                    <div class="form__send send">
                        <div class="send__skew skew">
                            <button class="skew__button"><span>Оставить заявку</span></button>
                            <div class="skew__line"></div>
                        </div>
                        <div class="send__text">Нажимая на кнопку “Оставить заявку” вы<br>соглашаетесь<br><u>с “Пользовательским соглашением”</u></div>
                    </div>
                    <button class="form__close">
                        <img src="./assets/close.svg" alt="close">
                    </button>
                </form>
            </div>
        `;
        document.body.append(el);
        const close = document.querySelector('.form__close');
        close.addEventListener('click', (e) => {
            e.preventDefault();
            el.remove();
        });
    });
});