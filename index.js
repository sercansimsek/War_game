const getCards = document.querySelector(".get-cards");
const draw = document.querySelector(".draw");

const url = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/";

let drawURL;

let deckId;
getCards.addEventListener("click", function () {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			deckId = data.deck_id;
			drawURL = `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`;
		});
});

function handleDraw() {
	fetch(drawURL)
		.then((res) => res.json())
		.then((data) => console.log(data));
}

draw.addEventListener("click", handleDraw);

console.log(deckId);
