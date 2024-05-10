interface BaseFighter {
  lifePoints: number;
  receiveDamage(attackPoints: number): void;
}

export default BaseFighter;
