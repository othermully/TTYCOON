import { player } from "./player.js";
import * as dom from './ui.js';


export function hack() {
	player.data += player.clickPower;
	dom.playerData.innerHTML = player.data;
}

export function infectComputers() {
	//	if (player.skills.hacking < 1) {
	//		console.log("Nice try script kiddie.");
	//	}

	if (player.data < 1000) {
		console.log("Current data won't suffice.");
	}

	else {
		// Random roll - Eventually the hacking skill should influence the chances of success 
		const roll = Math.floor(Math.random() * 10);

		player.data -= 1000
		dom.playerData.innerHTML = player.data
		if (roll >= 3) {
			console.log("Success");
			player.botnetSize += 1
			dom.playerBotnetSize.innerHTML = player.botnetSize;
			player.autoData += player.botnetSize * 0.5;
		}
		else {
			// here it should increase the heat meter
			console.log("Unsuccessfull infection.");

		}
	}
}
