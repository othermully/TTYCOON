import { player } from './player.js';
import * as dom from './ui.js';

export const upgrades = [
	{
		id: 'clickPower',
		name: 'Click Power',
		baseCost: 10,
		level: 0,
		get cost() {
			// Currently doubles cost each level increase	
			return this.baseCost * Math.pow(2, this.level);
		},
		effect() {
			player.credits -= this.cost;
			player.clickPower += 1;
			this.level += 1;

			// Seprate DOM stuff in ui.js function?
			dom.playerClickPower.innerHTML = player.clickPower;
			dom.clickPowerLevel.innerHTML = this.level;
			dom.clickPowerCost.innerHTML = this.cost;
		}
	},

	{
		id: 'autoClicker',
		name: 'Auto Scripts',
		baseCost: 50,
		level: 0,
		get cost() {
			return this.baseCost * Math.pow(2, this.level);
		},
		effect() {
			player.autoData += 1;
			player.credits -= this.cost;
			dom.playerCredits.innerHTML = player.credits;
			this.level += 1;
			console.log(this.name + ' Upgraded.');

			// Seprate DOM stuff in ui.js function?
			dom.autoClickerCost.innerHTML = this.cost;
			dom.autoClickerLevel.innerHTML = this.level;
			dom.playerDataPerSecond.innerHTML = player.autoData;
		}
	},

	{
		id: 'cryptoMiner',
		name: 'Crypto Miner',
		baseCost: 500,
		level: 0,
		get cost() {
			return this.baseCost * Math.pow(2, this.level);
		},
		effect() {
			player.autoCredits += 1;
			player.credits -= this.cost;
			this.level += 1;
			console.log(this.name, ' Upgraded');

			// Seprate DOM stuff in ui.js function?
			dom.playerCredits.innerHTML = player.credits;
			dom.cryptoMinerCost.innerHTML = this.cost;
			dom.cryptoMinerLevel.innerHTML = this.level;
		}

	}
]

export async function applyUpgrade(id) {
	const upgrade = upgrades.find(u => u.id === id);
	if (player.credits < upgrade.cost) {
		console.log("Can't afford upgrade");
	}
	else {
		upgrade.effect();
	}
}

