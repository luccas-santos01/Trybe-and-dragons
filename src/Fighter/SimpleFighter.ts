import BaseFighter from './BaseFighter';

interface SimpleFighter extends BaseFighter {
  lifePoints: number;
  strength: number;

  attack(enermy: SimpleFighter): void;

  receiveDamage(attackPoints: number): number;
}

export default SimpleFighter;
