import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this.player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints > -1 && this.player2.lifePoints > -1) {
      this.player.attack(this.player2);
      if (this.player2.lifePoints > -1) {
        this.player2.attack(this.player);
      }
    }

    if (this.player.lifePoints <= -1) {
      return -1;
    }
    return 1;
  }
}

export default PVP;
