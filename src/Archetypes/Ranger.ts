import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _instanceCount = 0;
  private _type: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger._instanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instanceCount;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Ranger;
