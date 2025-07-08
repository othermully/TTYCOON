export class Player {
	constructor() {
		this.credits = 0;
		this.clickPower = 1;
		this.autoIncome = 0;
		this.data = 0;
		this.level = 1;
		this.skills = {
			hacking: 0,
			stealth: 0
		};
	}
}

export const player = new Player();
console.log('Player Intialized!');
