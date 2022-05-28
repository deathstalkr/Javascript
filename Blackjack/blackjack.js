let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""

let sum = 0
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
//let messageEl = document.querySelector("#message-el")
let cardEl = document.getElementById("card-el")

let player = {
  name: "Solomon",
  chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1
  if (random === 1) {
    return 11
  } else if (random > 10) {
    return 10
  } else {
    return random
  }
}

function startGame() {
  isAlive = true
  hasBlackjack = false
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}


function renderGame() {
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Woohoo! you have got blackjack!"
    hasBlackjack = true
  } else {
    message = "You're out of the game"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  //console.log(isAlive)
  //console.log(hasBlackjack)
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
  }
  //console.log(cards)
}
 
