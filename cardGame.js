class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;

        if (suit == 'clubs') {
            this.value = value;
        }
        else if (suit == 'diamonds') {
            this.value = value + 13;
        } 
        else if (suit == 'hearts') {
            this.value = value + 26;
        }
        else {
            this.value = value + 39;
        }
    
    }
}class Deck {
    constructor() {
        this.cards = [];    
    }      
    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9',     '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
    shuffleDeck() {
       let location1, location2, tmp;
       for (let i = 0; i < 1000; i++) {
           location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
        }
    }
}class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
        this.faceUp;
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();

        d.createDeck();
        d.shuffleDeck();  

        this.players[0].playerCards = d.cards.slice(0, 5);
        this.players[1].playerCards = d.cards.slice(5, 10);
        this.cardsInMiddle = d.cards.slice(10,52);
        this.faceUp = this.cardsInMiddle.splice(0,1);
        console.log();
        console.log("first face Up\n")
        console.log(this.faceUp);
        this.player1sTurn();
    }

    player1sTurn() {
        console.log("Player 1 is playing");
        for(let i = 0; i < this.players[0].playerCards.length; i++) {
            console.log(this.faceUp,"------",this.players[0].playerCards[i].suit )
            
            if(this.faceUp.suit === this.players[0].playerCards[i].suit) {
                console.log("Matched card ",this.players[0].playerCards[i]);
            }
        }
    }

}

let gameBoard = new Board();
gameBoard.start('Mario', 'Luigi');
//console.log(gameBoard.players);
console.log("\n",gameBoard.players[0]);
console.log("\n",gameBoard.players[1]);

console.log("\n Cards in the middle or floor \n" , gameBoard.cardsInMiddle);


