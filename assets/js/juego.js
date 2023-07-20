/**
 * Cartas
 * Diccionario de cartas
 * 2C = 2 de Treboles
 * 2D = 2 de Diamantes
 * 2H = 2 de Corazones
 * 2S = 2 de Espadas
 */
let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

// Puntos
let playerPoints = 0;
let computerPoints = 0;

// Buttons HTML
const btnRequestCard = document.querySelector("#btn-request-card");


// Score HTML
const playerScore = document.querySelector("small");
const computerScore = document.querySelectorAll("small")[1];

/**
 * Esta funcion se encarga de crear el mazo de cartas
 * tambien se encarga de barajarlo
 */
const createDeck = () => {

  for (let i = 2; i <= 10; i++) {
    for (let e = 0; e < types.length; e++) {
      deck.push(i + types[e]);
    }
  }

  for (const type of types) {
    for (const special of specials) {
      deck.push(special + type);
    }
  }

  // Posible libreria para barajar
  // deck = _.shuffle(deck);

  deck = deck.sort(() => 0.5 - Math.random())

  return deck;

};

/**
 * Esta funcion se encarga de tomar una carta y eliminarla del mazo
 * @returns carta
 */
const takeCard = () => {

  if (deck.length === 0) {
    throw "No hay cartas en el mazo";
  }

  let carta;

  carta = deck.pop();

  return carta;
};


/**
 * Esta funcion se encarga de asignar un valor a la carta
 * @param {*} card
 * @returns valor de la carta
 */
const cardValue = (card) => {

  // Elimina el ultimo caracter de la carta, que es el tipo de carta
  const value = card.substring(0, card.length - 1);

  // Asigna puntos a la carta, si es A = 11, si es J, Q, K = 10 y si es un numero, el numero de la carta
  return isNaN(value) ? (value === 'A' ? 11 : 10) : value * 1; 

}

// Eventos
btnRequestCard.addEventListener("click", () => {
  
  const card = takeCard();
  
  playerPoints = playerPoints + cardValue(card);
  
  playerScore.innerText = playerPoints;
  
  // Crear imagen de la carta

})


createDeck();


