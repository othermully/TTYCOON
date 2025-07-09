import { player } from './player.js';

const playerCredits = document.getElementById("player-credits")
const playerData = document.getElementById("player-data");

const playerClickPower = document.getElementById("player-click-power");
const clickPowerLevel = document.getElementById("click-power-level");
const clickPowerCost = document.getElementById("click-power-cost");

const autoClickerLevel = document.getElementById("auto-clicker-level");
const autoClickerCost = document.getElementById("auto-clicker-cost");


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
			player.credits -= this.cost;
			player.clickPower += 1;
			this.level += 1;
			playerClickPower.innerHTML = player.clickPower;
			clickPowerLevel.innerHTML = this.level;
			clickPowerCost.innerHTML = this.cost;
			playerCredits.innerHTML = player.credits;
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
			player.credits -= this.cost;
			this.level += 1
			console.log(this.name + ' Upgraded.');
			autoClickerCost.innerHTML = this.cost;
			autoClickerLevel.innerHTML = this.level;
			setInterval(() => {
				player.data += player.autoIncome;
				updateUI();
			}, 1000);
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

async function updateUI() {
	playerData.innerHTML = player.data;
}
