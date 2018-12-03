const date = document.querySelector(".date");
let d = new Date();
let gameClock;
const deck = document.querySelector(".deck");

const dayNum = d.getDate() //change this for demo


function addNums(cat) {
  console.log("day number")
  cat.innerHTML = "hello"
}

const catDeck = newDeck(catCards)

function makeDay(card) {

	function stripLeadZero(num) {
		if (num.toString()[0] === '0') {
			return num.toString()[1]
		} else {
			return num
		}
	}

	return `<p class="card-day-show">${stripLeadZero(card.day())}</p>`;
}

function makeCard(card) {
	return `<li class="card" data-card="${card.day()}">
            <img src="${card.relLink}" height="125" width="125" 
            alt="${card.title()}" title="by ${card.creator}">
          </li>`;
}

function addCalendar() {
	const deck = document.querySelector(".deck");
	deck.innerHTML = 'DAY 1'
	let allCardHTML = catDeck.map(function(card) {
		cardHTML = makeDay(card) + makeCard(card);
		// if (card.day() % 5 == 0) {
		// 	// cardHTML += '<br><br>'
		// }
		return cardHTML
	});
	deck.innerHTML = allCardHTML.join("");
	addCats();
	showDate();
}

addCalendar();

function addCats() {
	const allCats = document.querySelectorAll(".card");
	allCats.forEach(function(cat) {
    // if (dayNum >= cat.dataset.card) {
		cat.addEventListener("click", () => {
				if (!cat.classList.contains("show")) {
				  cat.classList.add("show");
				}
		});
	// };
})
}

// show current date
function showDate() {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	date.innerHTML = `Today's Date: <div>${months[d.getMonth()]} ${d.getDate()},
		${d.getFullYear()}</div>`;
}
