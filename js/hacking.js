import { player } from "./player.js";

const playerData = document.getElementById("player-data");

export function hack() {
	player.data += player.clickPower;
	playerData.innerHTML = player.data;
}
