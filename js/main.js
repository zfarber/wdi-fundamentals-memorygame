cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		console.log(cardsInPlay[0] === cardsInPlay[1] ? "You found a match!" : "Sorry, try again.");
		cardsInPlay = [];		
	};
};

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};