import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _instanceCount = 0;
  private _type: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._instanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instanceCount;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Necromancer;
