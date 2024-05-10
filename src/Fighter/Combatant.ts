interface Combatant {
  lifePoints: number;
  strength: number;
  attack(enemy: Combatant): void;
  receiveDamage(attackPoints: number): number;
}

export default Combatant;
