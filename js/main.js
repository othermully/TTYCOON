import { hack, infectComputers } from "./hacking.js"
import { sellData } from "./sell.js";
import { upgrades, applyUpgrade } from "./upgrade.js";
import * as dom from './ui.js';

// Listeners
dom.hackBtn.addEventListener("click", handleHack);
dom.sellBtn.addEventListener("click", handleSell);
dom.cryptoMinerUpgradeBtn.addEventListener("click", handleCryptoMinerUpgrade);
dom.clickPowerUpgradeBtn.addEventListener("click", handleClickPowerUpgrade);
dom.autoClickerUpgradeBtn.addEventListener("click", handleAutoClickerUpgrade);
dom.infectComputersBtn.addEventListener("click", handleInfectComputers);

// Event Handlers
function handleHack() {
	hack();
}

function handleSell() {
	sellData();
}

function handleClickPowerUpgrade() {
	applyUpgrade("clickPower");
}

function handleAutoClickerUpgrade() {
	applyUpgrade("autoClicker");
}

function handleCryptoMinerUpgrade() {
	applyUpgrade("cryptoMiner");
}

function handleInfectComputers() {
	infectComputers();
}


