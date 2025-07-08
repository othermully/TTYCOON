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
		effect: () => {
			player.clickPower += 1;
			this.level += 1;
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
		effect: () => {
			player.autoIncome += 1;
			this.level += 1;
		}
	}
]

export function applyUpgrade(id) {
	const upgrade = upgrades.find(u => u.id === id);
	upgrade.effect();
	player.credits -= upgrade.cost;
	console.log(upgrade);
}
