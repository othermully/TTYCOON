import { player } from './player.js';

export const upgrades = [
	{
		id: 'clickPower',
		name: 'Click Power',
		baseCost: 10,
		level: 0,
		get cost() {
			return this.baseCost * Math.pow(2, this.level)
		},
		effect() {
			player.clickPower += 1;
			this.level += 1;
			console.log(this.name + ' Upgraded.');
			console.log('Current Level: ' + this.level);
			console.log('New cost: ' + this.cost);
		}
	},
	{
		id: 'autoClicker',
		name: 'Botnet',
		baseCost: 50,
		level: 0,
		get cost() {
			return this.baseCost * Math.pow(2, this.level)
		},
		effect() {
			player.autoIncome += 1;
			this.level += 1
			console.log(this.name + ' Upgraded.');
			console.log('Current Level: ' + this.level);
			console.log('New cost: ' + this.cost);
		}
	}
]

export async function applyUpgrade(id) {
	const upgrade = upgrades.find(u => u.id === id);
	upgrade.effect();
	player.credits -= upgrade.cost;
}
