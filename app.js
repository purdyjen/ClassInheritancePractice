import Game from "./Game.js";
import CardGame from "./CardGame.js";
import BoardGame from "./CardGame.js";

const charades = new Game("Charades", true, 4, null);
const chess = new BoardGame("Chess", false, 2, 2, ["strategy", "classic"]);
const solitaire = new CardGame("Solitaire", false, 1, 1, 1);

charades.addRating(5);
chess.addRating(3);
chess.addRating(1);
solitaire.addRating(1);

console.log(charades);
console.log(chess);
console.log(solitaire);
console.log(chess.getAverageRating());
