const getCards = document.querySelector(".get-cards");

const url = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/";

getCards.addEventListener("click", function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
