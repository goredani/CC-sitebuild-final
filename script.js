console.log(books);

const Card = ({title, sub, text}, index) => {
    return `
    <div class="card">
        
        <div class="card-content">
            <div id="${index + 1}" class="card-header"><h3>${index + 1}</h3></div>
            <div class="card-text">
                <h4>${sub}</h4>
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
        <div class="card-footer">
            <button>read more</button><span class="material-icons">arrow_forward</span>
        </div>
    </div>
    `
}

const cardContainer = document.querySelector('#card-container');

const iterateBooks = books.cards;

const bookCards = iterateBooks.map((card, i) => Card(card, i));

cardContainer.innerHTML = bookCards.join('');