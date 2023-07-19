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

createDeck();
takeCard();
