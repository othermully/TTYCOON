import { player } from "./player.js";
import { applyUpgrade } from "./upgrade.js";

const upgradeBtn = document.getElementById('upgrade');

upgradeBtn.addEventListener('click', handleUpgrade);

function handleUpgrade() {
	applyUpgrade('clickPower');
}

