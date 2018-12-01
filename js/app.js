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
	"fa-tree",
	"fa-snowflake",
	"fa-air-freshener",
	"fa-tree"
];
const cards = card_array.concat(card_array)

// octocat pics go here
const catCards = [
	{
		creator: "Cameron McEfee",
		relLink: 'img/01_shoptocat.png'
	},
	{
		creator: "Tony Jaramillo",
		relLink: 'img/02_hanukkat.png'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/03_jenktocat.jpg'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/04_repo.png'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/05_scottocat.jpg'
	},
	{
		creator: "James Kang",
		relLink: 'img/06_carlostocat.gif'
	},
	{
		creator: "Jordan McCullough",
		relLink: 'img/07_scarletteocat.jpg'
	},
	{
		creator: "Jason Costello",
		relLink: 'img/08_waldocat.png'
	},
	{
		creator: "Jason Costello",
		relLink: 'img/09_cherryontop-o-cat.png'
	},
	{
		creator: "Haley Carroll",
		relLink: 'img/10_mona-lovelace.jpg'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/11_class-act.png'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/12_socialite.jpg'
	},
	{
		creator: "Haley Carroll and kimestoesta",
		relLink: 'img/13_dinotocat.png'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/14_drunktocat.jpg'
	},
	{
		creator: "Haley Carroll",
		relLink: 'img/15_saint-nictocat.jpg'
	},
	{
		creator: "James Kang",
		relLink: 'img/16_filmtocat.png'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/17_puppeteer.png'
	},
	{
		creator: "Haley Carroll",
		relLink: 'img/18_snowtocat_final.jpg'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/19_poptocat.png'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/20_forktocat.jpg'
	},
	{
		creator: "James Kang",
		relLink: 'img/21_maxtocat.gif'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/22_setuptocat.jpg'
	},
	{
		creator: "Joao Ribeiro and Joel Glovier",
		relLink: 'img/23_welcometocat.png'
	},
	{
		creator: "Tony Jaramillo",
		relLink: 'img/24_grinchtocat.gif'
	},
	{
		creator: "Cameron McEfee",
		relLink: 'img/25_saint-nicktocat.jpg'
	},

];

function OctoCard(creator, relLink) {
	this.creator = creator
	this.relLink = relLink
	this.day = () => {
		return this.relLink.slice(4, 6)
	}
	this.title = () => {
		return this.relLink.slice(7, -4)
	}
}

function newDeck(catCards) {
	let newDeck = []
	catCards.forEach((card) => {
		newCard = new OctoCard(card.creator, card.relLink)
		newDeck.push(newCard)
	})
	return newDeck
}

const catDeck = newDeck(catCards)

// original version
// function makeCard(card) {
// 	return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
// }

function makeCard(card) {
	return `<li class="card" data-card="${card.day()}"><img src="${card.relLink}" height="125" width="125" alt="${card.title()}" title="by ${card.creator}"></li>`;
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
	let cardHTML = catDeck.map(function(card) {
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

