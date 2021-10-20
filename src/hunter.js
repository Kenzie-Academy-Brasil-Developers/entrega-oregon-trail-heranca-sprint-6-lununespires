class Hunter extends Traveler {
  constructor(name, isHealthy) {
    super(name, isHealthy);
    this._food = 2
  }
  hunt() {
    return this._food += 5;
  }

  eat() {
    if (this._food >= 2) {
      return this._food -= 2;
    }
    if (this._food < 2) {
      this._food = 0;
      return this._isHealthy = false;
    }
  }
  giveFood(traveler, numOfUnits) {
    if (numOfUnits <= this._food) {
      this._food -= numOfUnits;
      return traveler.food += numOfUnits;
    }
  }
}