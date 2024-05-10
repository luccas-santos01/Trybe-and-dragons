import Fighter from '../Fighter';
import Combatant from '../Fighter/Combatant';
import Battle from './Battle';

class PVE extends Battle {
  environment: Combatant[];

  constructor(player: Fighter, environment: Combatant[]) {
    super(player);
    this.environment = environment;
  }

  getNextMonster(): Combatant | null {
    const foundMonster = this.environment.find((monster) => monster.lifePoints > -1);
    return foundMonster || null;
  }

  allMonstersDefeated(): boolean {
    return this.environment.every((monster) => monster.lifePoints <= -1);
  }

  attackSequence(monster: Combatant) {
    this.player.attack(monster);
    if (monster.lifePoints > -1) {
      monster.attack(this.player);
    }
  }

  fight(): number {
    while (this.player.lifePoints > -1 && !this.allMonstersDefeated()) {
      const monster = this.getNextMonster();
      if (monster) {
        this.attackSequence(monster);
      }
    }

    if (this.player.lifePoints <= -1) {
      return -1;
    }
    return 1;
  }
}

export default PVE;
