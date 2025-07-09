import { hack } from "./hacking.js"
import { sellData } from "./sell.js";
import { player } from "./player.js";
import { upgrades, applyUpgrade } from "./upgrade.js";

// DOM Elements
const clickPowerUpgradeBtn = document.getElementById("click-power-upgrade-btn");
const hackBtn = document.getElementById("hack-button");
const sellBtn = document.getElementById("sell-button");
const playerClickPower = document.getElementById("player-click-power");
playerClickPower.innerHTML = player.clickPower;

// Listeners
hackBtn.addEventListener("click", handleHack);
sellBtn.addEventListener("click", handleSell);
clickPowerUpgradeBtn.addEventListener("click", handleClickPowerUpgrade);

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

