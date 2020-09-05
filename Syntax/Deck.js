const makeDeck = () => {
	return {
		deck: [],
		drawCards: [],
		suits: [ 'hearts', 'daimonds', 'spades', 'clubs' ],
		values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
		initDeck() {
			const { suits, values, deck } = this;
			for (let value of values.split(',')) {
				for (let suit of suits) {
					deck.push({ value, suit });
				}
			}
		},
		drawCard() {
			const { deck, drawCards } = this;
			const card = deck.pop();
			drawCards.push(card);
			return card;
		},
		drawMultiple(count) {
			const cards = [];
			for (let i = 0; i < count; i++) {
				cards.push(this.drawCard());
			}
			return cards;
		},
		shuffle() {
			const { deck } = this;
			for (let i = deck.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
			}
		}
	};
};

const myDeck = makeDeck();
myDeck.initDeck();
myDeck.drawCard();
myDeck.drawMultiple(5);
myDeck.shuffle();

console.log(myDeck.deck);
console.log(myDeck.deck.length);

const deck2 = makeDeck();
deck2.initDeck();
console.log(deck2);
console.log(deck2.deck.length);
