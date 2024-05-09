import Race from './Race';

class Orc extends Race {
  private static _instanceCount = 0;
  private readonly _maxLifePoints: number = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instanceCount += 1;
  }

  public static createdRacesInstances(): number {
    return Orc._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
