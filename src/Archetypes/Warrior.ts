import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _instanceCount = 0;
  private _type: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._instanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instanceCount;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Warrior;
