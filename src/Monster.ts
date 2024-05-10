import { SimpleFighter } from './Fighter';
import BaseFighter from './Fighter/BaseFighter';
import Combatant from './Fighter/Combatant';

class Monster implements SimpleFighter, Combatant {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: BaseFighter) {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}

export default Monster;
