import * as dom from './ui.js';
import { player } from './player.js';

export const shop = [
	{
		id: 'cpu',
		name: 'Upgrade CPU',
		cost: 300,
		purchased: false,
		effect() {
			player.computePower += 1;
			dom.playerComputePower.innerHTML = player.computePower;
			player.autoData += player.computePower * 0.5;
			player.autoCredits += player.computePower * 0.5;
			dom.upgradeCpuBtn.remove();
			dom.upgradeCpuCost.remove();
			console.log("Compute Power Upgraded!");
		}
	},
]

export function purchaseItem(id) {
	const item = shop.find(u => u.id === id)

	if (player.credits < item.cost) {
		console.log("Can't afford ", item.name);
	}
	else {
		item.effect();
		item.purchased = true;
	}
}
