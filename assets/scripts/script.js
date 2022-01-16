const front = 'card_front'
const back = 'card_back'

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react',
];

let cards = null;

startGame();

function startGame(){
    cards = createCardsFromTechs(techs);
    shuffleCards(cards);

    initializeCards(cards);
}

function initializeCards(cards){
    let gameBoard = document.getElementById('gameBoard');

    cards.forEach((card) => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add('card'); 
        cardElement.dataset.icon = card.icon;

        gameBoard.appendChild(cardElement);



    });


}

function shuffleCards(cards){
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }
}

createCardsFromTechs(techs);

function createCardsFromTechs(techs){
    let cards= [];

    techs.forEach((tech) => {
        cards.push(createPairFromTech(tech));
    });
    return cards.flatMap(pair => pair);
    
}

function createPairFromTech(tech){
    return [
        {
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false
        }, 
        {
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false
        }
    ]
}

function createIdWithTech(tech){
    return tech + parseInt(Math.random() * 1000)
}

