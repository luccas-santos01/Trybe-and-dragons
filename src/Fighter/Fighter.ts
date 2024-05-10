import Energy from '../Energy';
import BaseFighter from './BaseFighter';

interface Fighter extends BaseFighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy

  attack(enemy: Fighter): void;

  special?(enemy: Fighter): void;

  levelUp(): void;

  receiveDamage(attackPoints: number): number;
}

export default Fighter;
