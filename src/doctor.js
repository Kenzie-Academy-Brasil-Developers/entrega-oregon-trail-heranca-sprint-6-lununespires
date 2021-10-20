class Doctor extends Traveler {
  constructor(name, isHealthy, food) {
    super(name, isHealthy, food);
  }

  heal(traveler) {
    if (traveler._isHealthy === false) {
      traveler._isHealthy = true;
    }
  }
}
