import Race from './Race';

class Elf extends Race {
  private static _instanceCount = 0;
  private readonly _maxLifePoints: number = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instanceCount += 1;
  }

  public static createdRacesInstances(): number {
    return Elf._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
