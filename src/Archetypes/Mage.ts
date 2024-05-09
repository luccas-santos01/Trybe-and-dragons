import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _instanceCount = 0;
  private _type: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._instanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instanceCount;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Mage;
