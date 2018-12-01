let openCards = [];
let time = 0;
let clockStart = false;
const clock = document.querySelector(".clock");
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
	time = 0;
	showTime();
	deck.innerHTML = cardHTML.join("");
	dealCards();
}

startGame();


function dealCards() {
	const allCards = document.querySelectorAll(".card");
	moves = 0;
	allCards.forEach(function(card) {
		card.addEventListener("click", () => {

			// start the clock
			if (!clockStart) {
				timer();
				clockStart = true;
		}
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

function timer() {
	time = 0
}

// show current time
function showTime() {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	if (seconds < 10) {
		clock.innerHTML = `${minutes}:0${seconds}`;
	} else {
		clock.innerHTML = `${minutes}:${seconds}`;
	}
}

function stopTime() {
	clockStart = false;
	clearInterval(gameClock);
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
		stopTime();
		matchedPairs = 0;
	}
}

function finalBanner() {
	const finalTime = document.getElementsByClassName("final-time")[0];
	const finalMoves = document.getElementsByClassName("final-moves")[0];
	const finalStars = document.getElementsByClassName("final-stars")[0];
	finalTime.innerHTML = `Your Time: ${clock.innerHTML}`
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
	stopTime();
	startGame();
	removeBanner();
})

