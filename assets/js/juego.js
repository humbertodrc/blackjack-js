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

  console.log(deck);

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

const cardValue = (card) => {

  // Elimina el ultimo caracter de la carta, que es el tipo de carta
  const value = card.substring(0, card.length - 1);

  // Asigna puntos a la carta, si es A = 11, si es J, Q, K = 10 y si es un numero, el numero de la carta
  return isNaN(value) ? (value === 'A' ? 11 : 10) : value * 1; 

}

createDeck();
const valor = cardValue(takeCard());
console.log({valor});


