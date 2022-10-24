import Game from "./Game.js";

export default class CardGame extends Game {
  constructor(name, isTeam, minNumOfPlayers, maxNumOfPlayers, decksReq) {
    super(name, isTeam, minNumOfPlayers, maxNumOfPlayers);
    this._decksReq = decksReq;
  }

  get decksReq() {
    return this._decksReq;
  }
}
