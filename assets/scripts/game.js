let game = {

    lockMode: false,
    firstCard: null,
    secundCard: null,

    setCard: function(id){
        let card = this.cards.filter(card => card.id === id)[0];

        if(card.flipped || this.lockMode){
            return false;
        }

        if(!this.firstCard){
            this.firstCard = card;
            return true;
        }else{
            this.secundCard = card;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function(){
        return this.firstCard.icon === this.secundCard.icon;
    },

    clearCards: function(){
        this.lockMode = false;
        this.firstCard = null;
        this.secundCard = null;
    },
    
    techs: [
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
    ],
    
    cards: null,

    createCardsFromTechs: function(){
        this.cards = [];
    
        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));
        });
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },
    
    createPairFromTech: function(tech){
        return [
            {
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false
            }, 
            {
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false
            }
        ]
    },
    
    createIdWithTech: function(tech){
        return tech + parseInt(Math.random() * 1000);
    },

    shuffleCards: function(){
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while(currentIndex != 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }
}
