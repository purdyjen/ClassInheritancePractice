import Game from "./Game.js";

export default class BoardGame extends Game {
  constructor(name, isTeam, minNumOfPlayers, maxNumOfPlayers, type) {
    super(name, isTeam, minNumOfPlayers, maxNumOfPlayers);
    this._type = type;
  }

  get type() {
    return this._type;
  }
}
