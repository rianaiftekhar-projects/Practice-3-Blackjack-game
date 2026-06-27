let player = {
  name: "Azure",
  chips: 100,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let msg = document.getElementById("message-el");
let cardel = document.getElementById("card");
let sumel = document.getElementById("total");
let playerel = document.getElementById("player");
playerel.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random > 10) {
    return 10;
  } else if (random === 1) {
    return 11;
  } else {
    return random;
  }
}
function startGame() {
  cards = [];
  sum = 0;
  hasBlackJack = false;
  isAlive = true;

  let firstCard = getRandomCard();
  cards.push(firstCard);
  sum = firstCard;

  cardel.textContent = "Cards: " + cards.join(" ");
  sumel.textContent = "Sum: " + sum;
  renderGame();
}
function renderGame() {
  if (sum < 21) {
    msg.textContent = "Do you want to draw another Card?";
  } else if (sum === 21) {
    msg.textContent = "Woohooo! you got BlackJack!";
    hasBlackJack = true;
  } else {
    msg.textContent = "you are out of the game :(";
    isAlive = false;
  }
}
function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;

    cardel.textContent = "Cards: " + cards.join(" ");
    sumel.textContent = "Sum: " + sum;

    renderGame();
  }
}
