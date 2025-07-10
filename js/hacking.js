import { player } from "./player.js";
import * as dom from './ui.js';


export function hack() {
	player.data += player.clickPower;
	dom.playerData.innerHTML = player.data;
}

export function infectComputers() {
	if (player.skills.hacking < 1) {
		console.log("Nice try script kiddie.");
	}

	if (player.data < 1000) {
		console.log("Current data won't suffice.");
	}

	else {
		console.log("Computers infected test");
	}


}
