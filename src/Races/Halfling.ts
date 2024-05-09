import Race from './Race';

class Halfling extends Race {
  private static _instanceCount = 0;
  private readonly _maxLifePoints: number = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instanceCount += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
