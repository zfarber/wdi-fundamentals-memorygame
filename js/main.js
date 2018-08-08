cards = [
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
}
]
var cardsInPlay = [];
var gameBoard = document.querySelector('#game-board');

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		alert(cardsInPlay[0] === cardsInPlay[1] ? 'You found a match!' : 'Sorry, try again.');
		cardsInPlay = [];
		setTimeout(function() {
			gameBoard.innerHTML = ''
			createBoard();
		}, 500);
	};
};

function flipCard(element) {
	var data = element.getAttribute('data-id');
	cardsInPlay.push(JSON.parse(data).rank);
	element.setAttribute('src', JSON.parse(data).cardImage);
	checkForMatch();
};

function createBoard() {
	cards = shuffle(cards);
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', JSON.stringify(cards[i]));
		$(cardElement).one('click', function() {
			flipCard(this);
		});
		gameBoard.appendChild(cardElement);
	}
};

function shuffle(array) {
  var currentIndex = array.length;
  var switchValue;
  var randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    switchValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = switchValue;
  };
  return array;
};

createBoard();