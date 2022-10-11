const cards = document.querySelector('.cards__body');
const button = document.querySelector('.more_button');

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < 6; i++) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomInt(100)}`)
            .then(response => response.json())
            .then(json => {
                const el = document.createElement('div');
                el.className = 'cards__card card';
                el.innerHTML = `
                    <img src="./assets/card${getRandomInt(10)}.jpg" alt="card">
                    <div class="card__body">
                        <div class="card__title">bridge</div>
                        <div class="card__subtitle">${json.title}</div>
                        <div class="card__text">${json.body}</div>
                        <div class="card__info">Posted by <span>Eugenia</span>, on July  24, 2019</div>
                        <button class="card__button">Continue reading</button>
                    </div>
                `;
                cards.append(el);
            });
    }
});
