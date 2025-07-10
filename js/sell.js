import { player } from "./player.js";
import * as dom from './ui.js';

export function sellData() {
	if (player.data <= 0) {
		console.log("No data to sell.");
	}
	else {
		player.credits += player.data;
		dom.playerCredits.innerHTML = player.credits;
		player.data -= player.data;
		dom.playerData.innerHTML = player.data;
	}
}
