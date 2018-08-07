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
var gameBoard = document.querySelector("#game-board");

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		alert(cardsInPlay[0] === cardsInPlay[1] ? "You found a match!" : "Sorry, try again.");
		cardsInPlay = [];
	};
};

function flipCard(element) {
	console.log(element);
	var data = element.getAttribute("data-id");
	cardsInPlay.push(JSON.parse(data).rank);
	element.setAttribute("src", JSON.parse(data).cardImage);
	checkForMatch();
};

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", JSON.stringify(cards[i]));
		cardElement.addEventListener("click", function() {
			flipCard(this);
		});
		gameBoard.appendChild(cardElement);
	}
};

createBoard();