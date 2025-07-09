import { hack } from "./hacking.js"
import { sellData } from "./sell.js";
import { upgrades, applyUpgrade } from "./upgrade.js";

// DOM Elements
const autoClickerUpgradeBtn = document.getElementById("auto-clicker-upgrade-btn");
const clickPowerUpgradeBtn = document.getElementById("click-power-upgrade-btn");
const hackBtn = document.getElementById("hack-button");
const sellBtn = document.getElementById("sell-button");

// Listeners
hackBtn.addEventListener("click", handleHack);
sellBtn.addEventListener("click", handleSell);
clickPowerUpgradeBtn.addEventListener("click", handleClickPowerUpgrade);
autoClickerUpgradeBtn.addEventListener("click", handleAutoClickerUpgrade);

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
	applyUpgrade("autoClicker")
}

