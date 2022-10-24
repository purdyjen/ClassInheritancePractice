export default class Game {
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
