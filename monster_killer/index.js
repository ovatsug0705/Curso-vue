new Vue({
    el: "[data-game]",
    data: {
      plaing: false,
      warriorLife: 100,
      monsterLife: 100,
    },
    computed: {
        gameResult() {
            if(this.warriorLife <= 0) {
                this.resetGame();
                return 'The Monster wins :(';
            } else if(this.monsterLife <= 0) {
                this.resetGame();
                return 'The Warrior wins :)';
            }
        },
        warriorProgressBar() {
            if (this.warriorLife > 100) this.warriorLife = 100;
            if (this.warriorLife < 0) this.warriorLife = 0;
            return {
                width: `${this.warriorLife}%`,
                backgroundColor: this.warriorLife > 20 ? 'green' : 'red'
            };
        },

        monsterProgressBar() {
            if (this.monsterLife > 100) this.monsterLife = 100;
            if (this.monsterLife < 0) this.monsterLife = 0;
            return {
                width: `${this.monsterLife}%`,
                backgroundColor: this.monsterLife > 20 ? 'green' : 'red'
            };
        }
    },
    watch: {
    },
    methods: {
        resetGame() {
            this.warriorLife = 100;
            this.monsterLife = 100;
            this.plaing = false;
        },

        startGame() {
            this.warriorLife = 100;
            this.monsterLife = 100;
            this.plaing = true;
        },

        attack() {
            const value = parseInt(Math.random() * 10) + 1;
            const wDmg = parseInt(value * 1.3);
            const mDmg = parseInt(value * 1.2);
            this.warriorLife -= wDmg;
            this.monsterLife -= mDmg;
            this.log('player-log', `Jogador atingiu Monstro com ${mDmg}.`);
            this.log('monster-log', `Monstro atingiu Jogador com ${wDmg}.`);
        },

        specialAttack() {
            const value = parseInt(Math.random() * 10) + 1;
            const wDmg = parseInt(value * 1.2);
            const mDmg = parseInt(value * 1.4);
            this.warriorLife -= wDmg;
            this.monsterLife -= mDmg;
            this.log('player-log', `Jogador atingiu Monstro com ${mDmg}.`);
            this.log('monster-log', `Monstro atingiu Jogador com ${wDmg}.`);
        },

        heal() {
            const value = parseInt(Math.random() * 10) + 1;
            const wDmg = parseInt(value * Math.random());
            const healValue = parseInt(value * Math.random()) + 2;
            this.warriorLife += healValue - wDmg;
            this.log('player-log', `Jogador ganhou força de ${healValue}.`);
            this.log('monster-log', `Monstro atingiu Jogador com ${wDmg}.`);
        },

        log(classList, text) {
            document.querySelector('[data-monster-killer]').insertAdjacentHTML('afterbegin', `<li class="${classList}">${text}</li>`);
        },
    }
  })