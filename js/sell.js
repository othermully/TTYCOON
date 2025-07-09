import { player } from "./player.js";

const playerData = document.getElementById("player-data");
const playerCredits = document.getElementById("player-credits");

export function sellData() {
	if (player.data <= 0) {
		console.log("No data to sell.");
	}
	else {
		player.credits += player.data;
		playerCredits.innerHTML = player.credits;
		player.data = 0;
		playerData.innerHTML = player.data;
		console.log(player.credits);
	}
}
