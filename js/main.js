cards = [
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}
]
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		console.log(cardsInPlay[0] === cardsInPlay[1] ? "You found a match!" : "Sorry, try again.");
		cardsInPlay = [];		
	};
};

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};