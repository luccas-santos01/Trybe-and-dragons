interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enermy: SimpleFighter): void;

  receiveDamage(attackPoints: number): number;
}

export default SimpleFighter;
