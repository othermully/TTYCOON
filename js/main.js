import { hack, infectComputers } from "./hacking.js"
import { sellData } from "./sell.js";
import { upgrades, applyUpgrade } from "./upgrade.js";
import * as dom from './ui.js';
import { player } from "./player.js";
import { shop, purchaseItem } from "./shop.js";

// Listeners
dom.hackBtn.addEventListener("click", handleHack);
dom.sellBtn.addEventListener("click", handleSell);
dom.cryptoMinerUpgradeBtn.addEventListener("click", handleCryptoMinerUpgrade);
dom.clickPowerUpgradeBtn.addEventListener("click", handleClickPowerUpgrade);
dom.autoClickerUpgradeBtn.addEventListener("click", handleAutoClickerUpgrade);
dom.infectComputersBtn.addEventListener("click", handleInfectComputers);

// Shop items
dom.upgradeCpuBtn.addEventListener("click", () => { purchaseItem("cpu"); });

// Event Handlers
function handleHack() {
	hack();
}

function handleSell() {
	sellData();
}

function handleClickPowerUpgrade() {
	applyUpgrade("clickPower");
	// Call render function for ui stuff here
}

function handleAutoClickerUpgrade() {
	applyUpgrade("autoClicker");
	// Call render function for ui stuff here
}

function handleCryptoMinerUpgrade() {
	applyUpgrade("cryptoMiner");
	// Call render function for ui stuff here
}

function handleInfectComputers() {
	infectComputers();
	// Call render function for ui stuff here
}

// Auto update data - evetually put into its own engine.js file as it grows
setInterval(() => {
	// Auto increment player currencies
	player.data += player.autoData;
	player.credits += player.autoCredits;
	dom.playerData.innerHTML = player.data;
	dom.playerCredits.innerHTML = player.credits;
	dom.playerCreditsPerSecond.innerHTML = player.autoCredits;
	dom.playerDataPerSecond.innerHTML = player.autoData;

}, 1000);



