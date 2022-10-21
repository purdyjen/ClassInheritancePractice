class Game {
  constructor(name, isTeam, minNumOfPlayers, maxNumOfPlayers) {
    this._name = name;
    this._isTeam = isTeam;
    this._minNumOfPlayers = minNumOfPlayers;
    this._maxNumOfPlayers = maxNumOfPlayers;
    this._ratings = [];
  }

  get name() {
    return this._name;
  }

  get isTeam() {
    return this._isTeam;
  }

  get minNumOfPlayers() {
    return this._minNumOfPlayers;
  }

  get maxNumOfPlayers() {
    return this._maxNumOfPlayers;
  }

  get ratings() {
    return this._ratings;
  }

  getAverageRating() {
    let average =
      this._ratings.reduce((currentSum, rating) => currentSum + rating) /
      this._ratings.length;
    return `Average Rating: ${average.toPrecision(2)}`;
  }

  addRating(newRating) {
    if (newRating >= 1 && newRating <= 5) {
      this._ratings.push(newRating);
      return this._ratings;
    } else {
      return `Please enter a number between 1 and 5.`;
    }
  }
}

class CardGame extends Game {
  constructor(name, isTeam, minNumOfPlayers, maxNumOfPlayers, decksReq) {
    super(name, isTeam, minNumOfPlayers, maxNumOfPlayers);
    this._decksReq = decksReq;
  }

  get decksReq() {
    return this._decksReq;
  }
}

class BoardGame extends Game {
  constructor(name, isTeam, minNumOfPlayers, maxNumOfPlayers, type) {
    super(name, isTeam, minNumOfPlayers, maxNumOfPlayers);
    this._type = type;
  }

  get type() {
    return this._type;
  }
}

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
