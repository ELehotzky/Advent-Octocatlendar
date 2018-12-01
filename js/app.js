let openCards = [];
let clockStart = false;
const date = document.querySelector(".date");
let d = new Date();
let gameClock;
const deck = document.querySelector(".deck");
const restart = document.getElementsByClassName("fa-repeat")[0];
const closeBtn = document.getElementsByClassName("close-banner")[0];
const restartBtn = document.getElementsByClassName("restart")[1];
let card_array = [
	"fa-diamond",
	"fa-heart",
	"fa-paw",
	"fa-bolt",
	"fa-bug",
	"fa-cloud",
	"fa-star-o",
	"fa-tree"
];
const cards = card_array.concat(card_array)

function makeCard(card) {
	return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
}

/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

function startGame() {
	removeBanner();
	const deck = document.querySelector(".deck");
	let cardHTML = cards.map(function(card) {
		return makeCard(card);
	});
	deck.innerHTML = cardHTML.join("");
	dealCards();
	showDate();
}

startGame();


function dealCards() {
	const allCards = document.querySelectorAll(".card");
	allCards.forEach(function(card) {
		card.addEventListener("click", () => {
			// only allows two cards to be opened at a time
			if (openCards.length < 2) {
				if (!card.classList.contains("open") && !card.classList.contains("show") && !card.classList.contains("match")) {
				openCards.push(card);
				card.classList.add("open", "show");
				if (openCards.length == 2) {
					// check for match, if matches leave shown
					if (openCards[0].dataset.card == openCards[1].dataset.card) {
						openCards[0].classList.add("open", "show", "match");
						openCards[1].classList.add("open", "show", "match");
						openCards = [];
						winner();
					} else {
						// if cards don't match, flip cards back over
						setTimeout(function() {
							openCards.forEach(function(card) {
								card.classList.remove("open", "show");
							});
							openCards = [];
						}, 1000);
					}
				}
			}}
		});
	});
}

// show current date
function showDate() {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	date.innerHTML = `Today's Date: ${months[d.getMonth()]} ${d.getDate()},
		${d.getFullYear()}`;
}

//restart button restarts game
restart.addEventListener("click", () => {
	stopTime();
	startGame();
	removeBanner();
})

function winner() {
	if (matchedPairs == 8) {
		finalBanner();
	}
}

function finalBanner() {
	const finalTime = document.getElementsByClassName("final-time")[0];
	addBanner();
}

// closes the winner's banner
function removeBanner() {
	const banner = document.getElementsByClassName("winner-flag")[0];
	banner.classList.add("close");
}

function addBanner() {
	const banner = document.getElementsByClassName("winner-flag")[0];
	banner.classList.remove("close");
}


closeBtn.addEventListener("click", () => {
	removeBanner();
})

//restart button on banner restarts game
restartBtn.addEventListener("click", () => {
	startGame();
	removeBanner();
})

