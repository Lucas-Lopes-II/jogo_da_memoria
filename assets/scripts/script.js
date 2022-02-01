const FRONT = 'card_front'
const BACK = 'card_back'

startGame();

function startGame(){
    initializeCards(game.createCardsFromTechs());
}

function initializeCards(cards){
    let gameBoard = document.getElementById('gameBoard');

    game.cards.forEach((card) => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add('card'); 
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);



    });
}

function createCardContent(card, cardElement) {
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if(face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add('icon');
        iconElement.src = `./assets/images/${card.icon}.png`;
        cardElementFace.appendChild(iconElement);

    }else{
        cardElementFace.innerHTML = '&lt/&gt';
    }
    element.appendChild(cardElementFace);
}

function flipCard(){

    if(game.setCard(this.id)){

        this.classList.add('flip');
        if(game.secundCard){
            if(game.checkMatch()){
                game.clearCards();
            }else{
                setTimeout(() => {
                let firstCardView = document.getElementById(game.firstCard.id);
                let secundCardCardView = document.getElementById(game.secundCard.id);

                firstCardView.classList.remove('flip');
                secundCardCardView.classList.remove('flip');
                game.unflipCards();
                }, 1000)
            };
        }
    }
}