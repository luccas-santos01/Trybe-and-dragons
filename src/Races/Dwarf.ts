import Race from './Race';

class Dwarf extends Race {
  private static _instanceCount = 0;
  private readonly _maxLifePoints: number = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instanceCount += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
