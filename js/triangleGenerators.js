function updateLightning() {
    if (playerData.trianglesGenerator.lightning.hasUnlocked === true) {
        playerData.trianglesGenerator.lightning.effectiveness = playerData.trianglesGenerator.lightning.lightningAmount.mul(playerData.shop.items.row2.thunder.hasBought ? "0.15" : "0.1").add("1")
        document.getElementById("lightning-amount-txt").innerHTML = formatValue(playerData.trianglesGenerator.lightning.lightningAmount)
        document.getElementById("lightning-produce-txt").innerHTML = `+${formatValueNoDecimal(playerData.trianglesGenerator.lightning.effectiveness.sub("1").mul("100"))}%`
        document.getElementById("lightning-buy-btn-txt").innerHTML = formatValue(playerData.trianglesGenerator.lightning.cost)
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.lightning.cost) >= 0) {
            document.getElementById("lightning-buy-btn").classList.add("btn-can-afford")
            document.getElementById("lightning-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("lightning-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("lightning-buy-btn").classList.remove("btn-can-afford")
        }
    }
}
function updateLightningGenerator(tier) {
    if (playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].hasUnlocked === true) {
        document.getElementById(`lightning-gen-t${tier}-lvl`).innerHTML = formatValueNoDecimal(playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].lvl)
        document.getElementById(`lightning-gen-t${tier}-produce`).innerHTML = formatValue(playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].lvl)
        document.getElementById(`lightning-gen-t${tier}-buy-btn-txt`).innerHTML = formatValue(playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].cost)
        if (playerData.trianglesGenerator.lightning.lightningAmount.sub(playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].cost) >= 0) {
            document.getElementById(`lightning-gen-t${tier}-buy-btn`).classList.add("btn-lightning-can-afford")
            document.getElementById(`lightning-gen-t${tier}-buy-btn`).classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById(`lightning-gen-t${tier}-buy-btn`).classList.add("btn-cant-afford")
            document.getElementById(`lightning-gen-t${tier}-buy-btn`).classList.remove("btn-lightning-can-afford")
        }
    }
}
function updateTriangleGenerator(tier) {
    if (playerData.trianglesGenerator[`tier${tier}`].hasUnlocked === false && playerData.trianglesAmount.sub(playerData.trianglesGenerator[`tier${tier}`].cost) >= 0) {
        document.getElementById(`t${tier}-triangle-unlock`).classList.add("btn-can-afford")
        document.getElementById(`t${tier}-triangle-unlock`).classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById(`t${tier}-triangle-unlock`).classList.add("btn-cant-afford")
        document.getElementById(`t${tier}-triangle-unlock`).classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator[`tier${tier}`].hasUnlocked === true) {
        document.getElementById(`tri-gen-t${tier}-lvl`).innerHTML = `${formatValueNoDecimal(playerData.trianglesGenerator[`tier${tier}`].lvl)} ${playerData.shop.items.row1.triangles.hasBought ? `(${playerData.trianglesGenerator[`tier${tier}`].amountBought})` : ""} ${playerData.shop.items.row1.triangles.hasBought ? `x${formatValue(playerData.trianglesGenerator[`tier${tier}`].multiplier)}` : ""}`
        document.getElementById(`tri-gen-t${tier}-produce`).innerHTML = formatValue(playerData.trianglesGenerator[`tier${tier}`].lvl.mul(playerData.trianglesGenerator[`tier${tier}`].multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
        document.getElementById(`tri-gen-t${tier}-buy-btn-txt`).innerHTML = formatValue(playerData.trianglesGenerator[`tier${tier}`].cost)
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator[`tier${tier}`].cost) >= 0) {
            document.getElementById(`tri-gen-t${tier}-buy-btn`).classList.add("btn-can-afford")
            document.getElementById(`tri-gen-t${tier}-buy-btn`).classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById(`tri-gen-t${tier}-buy-btn`).classList.add("btn-cant-afford")
            document.getElementById(`tri-gen-t${tier}-buy-btn`).classList.remove("btn-can-afford")
        }
    }
}
function unlockLightning() {
    if (playerData.trianglesGenerator.lightning.hasUnlocked === false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.lightning.showUnlock) >= 0) {
        playerData.trianglesGenerator.lightning.hasUnlocked = true
        document.getElementById("lightning-gen-list").style.display = "block"
        document.getElementById("lightning-line").style.display = "block"
    }
}
function buyLightning() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.lightning.cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.lightning.cost)
        playerData.trianglesGenerator.lightning.cost = playerData.trianglesGenerator.lightning.cost.mul(playerData.trianglesGenerator.lightning.costIncrease)
        playerData.trianglesGenerator.lightning.lightningAmount = playerData.trianglesGenerator.lightning.lightningAmount.add("1")
    }
}
function upgradeLightningGenerator(tier) {
    if (playerData.trianglesGenerator.lightning.lightningAmount.sub(playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].cost) >= 0) {
        playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].lvl = playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].lvl.add("1")
        playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].cost = playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].cost.add(playerData.trianglesGenerator.lightning.lightningGenerator[`tier${tier}`].costIncrease)
    }
}
function upgradeTriangleGenerator(tier) {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator[`tier${tier}`].cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator[`tier${tier}`].cost)
        playerData.trianglesGenerator[`tier${tier}`].lvl = playerData.trianglesGenerator[`tier${tier}`].lvl.add("1")
        playerData.trianglesGenerator[`tier${tier}`].cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator[`tier${tier}`].cost, playerData.trianglesGenerator[`tier${tier}`].costIncrease))
        if (playerData.shop.items.row1.triangles.hasBought === true) {
            playerData.trianglesGenerator[`tier${tier}`].amountBought++;
            if (playerData.trianglesGenerator[`tier${tier}`].amountBought == 10) {
                playerData.trianglesGenerator[`tier${tier}`].amountBought = 0
                playerData.trianglesGenerator[`tier${tier}`].multiplier = playerData.trianglesGenerator[`tier${tier}`].multiplier.mul("2")
            }
        }
    } 
}
function unlockTriangleGenerator(tier) {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator[`tier${tier}`].cost) >= 0) {
        playerData.trianglesGenerator[`tier${tier}`].hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator[`tier${tier}`].cost)
        playerData.trianglesGenerator[`tier${tier}`].lvl = playerData.trianglesGenerator[`tier${tier}`].lvl.add("1")
        document.getElementById(`t${tier}-triangle-unlock`).style.display = "none"
        document.getElementById(`tri-gen-t${tier}-container`).style.padding = "0"
        document.getElementById("gain-txt").style.display = "block"
        document.getElementById("gen-list").style.display = "grid"
        document.getElementById(`tri-gen-t${tier}`).style.display = "grid"
        document.getElementById("tab-list").style.display = "block"
        playerData.trianglesGenerator[`tier${tier}`].cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator[`tier${tier}`].cost, playerData.trianglesGenerator[`tier${tier}`].costIncrease))
    }
}
function showTriangleUnlockButton(tier) {
    if (tier === 4 && playerData.shop.hasUnlocked === false) {
        return
    } 
    if (playerData.trianglesGenerator[`tier${tier - 1}`].hasUnlocked === true && playerData.trianglesGenerator[`tier${tier}`].hasUnlocked === false && playerData.trianglesAmount.sub(playerData.trianglesGenerator[`tier${tier}`].showUnlock) >= 0) {
        document.getElementById(`tri-gen-t${tier}-container`).style.display = "block"
        document.getElementById(`t${tier}-triangle-unlock`).style.display = "block"
        document.getElementById(`tri-gen-t${tier}-container`).style.padding = "20px"
        document.getElementById(`t${tier - 1}-line`).style.display = "block"
        document.getElementById(`tri-gen-t${tier}-unlock-cost-txt`).innerHTML = formatValue(playerData.trianglesGenerator[`tier${tier}`].cost)
    }
}