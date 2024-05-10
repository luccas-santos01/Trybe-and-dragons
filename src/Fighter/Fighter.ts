import Energy from '../Energy';
import BaseFighter from './BaseFighter';
import Combatant from './Combatant';

interface Fighter extends BaseFighter, Combatant {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy

  attack(enemy: Combatant): void;

  special?(enemy: Fighter): void;

  levelUp(): void;

  receiveDamage(attackPoints: number): number;
}

export default Fighter;
