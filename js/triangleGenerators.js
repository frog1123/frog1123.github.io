function updateTriangleGenerators() {
    // lightning 
    if (playerData.trianglesGenerator.lightning.hasUnlocked == true) {
        document.getElementById("lightning-amount-txt").innerHTML = formatValue(playerData.trianglesGenerator.lightning.lightningAmount)
        document.getElementById("lightning-produce-txt").innerHTML = `+${formatValueNoDecimal(playerData.trianglesGenerator.lightning.lightningAmount.mul("10"))}%`
        document.getElementById("lightning-buy-btn-txt").innerHTML = `Cost: ${formatValue(playerData.trianglesGenerator.lightning.cost)}`
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.lightning.cost) >= 0) {
            document.getElementById("lightning-buy-btn").classList.add("btn-can-afford")
            document.getElementById("lightning-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("lightning-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("lightning-buy-btn").classList.remove("btn-can-afford")
        }
    }
    // tier1
    if (playerData.trianglesGenerator.tier1.hasUnlocked == true) {
        document.getElementById("tri-gen-t1-lvl").innerHTML = `${formatValueNoDecimal(playerData.trianglesGenerator.tier1.lvl)} ${playerData.shop.items.triangles.hasBought ? `(${playerData.trianglesGenerator.tier1.amountBought})` : ""} ${playerData.shop.items.triangles.hasBought ? `x${formatValue(playerData.trianglesGenerator.tier1.multiplier)}` : ""}`
        document.getElementById("tri-gen-t1-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier1.lvl.mul(playerData.trianglesGenerator.tier1.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
        document.getElementById("tri-gen-t1-buy-btn-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier1.cost)
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier1.cost) >= 0) {
            document.getElementById("tri-gen-t1-buy-btn").classList.add("btn-can-afford")
            document.getElementById("tri-gen-t1-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("tri-gen-t1-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("tri-gen-t1-buy-btn").classList.remove("btn-can-afford")
        }
    }
    // tier2
    if (playerData.trianglesGenerator.tier2.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier2.cost) >= 0) {
        document.getElementById("t2-triangle-unlock").classList.add("btn-can-afford")
        document.getElementById("t2-triangle-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("t2-triangle-unlock").classList.add("btn-cant-afford")
        document.getElementById("t2-triangle-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator.tier2.hasUnlocked == true) {
        document.getElementById("tri-gen-t2-lvl").innerHTML = `${formatValueNoDecimal(playerData.trianglesGenerator.tier2.lvl)} ${playerData.shop.items.triangles.hasBought ? `(${playerData.trianglesGenerator.tier2.amountBought})` : ""} ${playerData.shop.items.triangles.hasBought ? `x${formatValue(playerData.trianglesGenerator.tier2.multiplier)}` : ""}`
        document.getElementById("tri-gen-t2-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier2.lvl.mul(playerData.trianglesGenerator.tier2.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
        document.getElementById("tri-gen-t2-buy-btn-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier2.cost)
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier2.cost) >= 0) {
            document.getElementById("tri-gen-t2-buy-btn").classList.add("btn-can-afford")
            document.getElementById("tri-gen-t2-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("tri-gen-t2-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("tri-gen-t2-buy-btn").classList.remove("btn-can-afford")
        }
    }
    // tier 3
    if (playerData.trianglesGenerator.tier3.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier3.cost) >= 0) {
        document.getElementById("t3-triangle-unlock").classList.add("btn-can-afford")
        document.getElementById("t3-triangle-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("t3-triangle-unlock").classList.add("btn-cant-afford")
        document.getElementById("t3-triangle-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator.tier3.hasUnlocked == true) {
        document.getElementById("tri-gen-t3-lvl").innerHTML = `${formatValueNoDecimal(playerData.trianglesGenerator.tier3.lvl)} ${playerData.shop.items.triangles.hasBought ? `(${playerData.trianglesGenerator.tier3.amountBought})` : ""} ${playerData.shop.items.triangles.hasBought ? `x${formatValue(playerData.trianglesGenerator.tier3.multiplier)}` : ""}`
        document.getElementById("tri-gen-t3-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier3.lvl.mul(playerData.trianglesGenerator.tier3.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
        document.getElementById("tri-gen-t3-buy-btn-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier3.cost)
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier3.cost) >= 0) {
            document.getElementById("tri-gen-t3-buy-btn").classList.add("btn-can-afford")
            document.getElementById("tri-gen-t3-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("tri-gen-t3-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("tri-gen-t3-buy-btn").classList.remove("btn-can-afford")
        }
    }
    // tier 4
    if (playerData.trianglesGenerator.tier4.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier4.cost) >= 0) {
        document.getElementById("t4-triangle-unlock").classList.add("btn-can-afford")
        document.getElementById("t4-triangle-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("t4-triangle-unlock").classList.add("btn-cant-afford")
        document.getElementById("t4-triangle-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator.tier4.hasUnlocked == true) {
        document.getElementById("tri-gen-t4-lvl").innerHTML = `${formatValueNoDecimal(playerData.trianglesGenerator.tier4.lvl)} ${playerData.shop.items.triangles.hasBought ? `(${playerData.trianglesGenerator.tier4.amountBought})` : ""} ${playerData.shop.items.triangles.hasBought ? `x${formatValue(playerData.trianglesGenerator.tier4.multiplier)}` : ""}`
        document.getElementById("tri-gen-t4-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier4.lvl.mul(playerData.trianglesGenerator.tier4.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
        document.getElementById("tri-gen-t4-buy-btn-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier4.cost)
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier4.cost) >= 0) {
            document.getElementById("tri-gen-t4-buy-btn").classList.add("btn-can-afford")
            document.getElementById("tri-gen-t4-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("tri-gen-t4-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("tri-gen-t4-buy-btn").classList.remove("btn-can-afford")
        }
    }
    // tier 5
    if (playerData.trianglesGenerator.tier5.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier5.cost) >= 0) {
        document.getElementById("t5-triangle-unlock").classList.add("btn-can-afford")
        document.getElementById("t5-triangle-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("t5-triangle-unlock").classList.add("btn-cant-afford")
        document.getElementById("t5-triangle-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator.tier5.hasUnlocked == true) {
        document.getElementById("tri-gen-t5-lvl").innerHTML = `${formatValueNoDecimal(playerData.trianglesGenerator.tier5.lvl)} ${playerData.shop.items.triangles.hasBought ? `(${playerData.trianglesGenerator.tier5.amountBought})` : ""} ${playerData.shop.items.triangles.hasBought ? `x${formatValue(playerData.trianglesGenerator.tier5.multiplier)}` : ""}`
        document.getElementById("tri-gen-t5-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier5.lvl.mul(playerData.trianglesGenerator.tier5.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
        document.getElementById("tri-gen-t5-buy-btn-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier5.cost)
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier5.cost) >= 0) {
            document.getElementById("tri-gen-t5-buy-btn").classList.add("btn-can-afford")
            document.getElementById("tri-gen-t5-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("tri-gen-t5-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("tri-gen-t5-buy-btn").classList.remove("btn-can-afford")
        }
    }
    // tier 6
    if (playerData.trianglesGenerator.tier6.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier6.cost) >= 0) {
        document.getElementById("t6-triangle-unlock").classList.add("btn-can-afford")
        document.getElementById("t6-triangle-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("t6-triangle-unlock").classList.add("btn-cant-afford")
        document.getElementById("t6-triangle-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator.tier6.hasUnlocked == true) {
        document.getElementById("tri-gen-t6-lvl").innerHTML = `${formatValueNoDecimal(playerData.trianglesGenerator.tier6.lvl)} ${playerData.shop.items.triangles.hasBought ? `(${playerData.trianglesGenerator.tier6.amountBought})` : ""} ${playerData.shop.items.triangles.hasBought ? `x${formatValue(playerData.trianglesGenerator.tier6.multiplier)}` : ""}`
        document.getElementById("tri-gen-t6-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier6.lvl.mul(playerData.trianglesGenerator.tier6.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
        document.getElementById("tri-gen-t6-buy-btn-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier6.cost)
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier6.cost) >= 0) {
            document.getElementById("tri-gen-t6-buy-btn").classList.add("btn-can-afford")
            document.getElementById("tri-gen-t6-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("tri-gen-t6-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("tri-gen-t6-buy-btn").classList.remove("btn-can-afford")
        }
    }
    // tier 7
    if (playerData.trianglesGenerator.tier7.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier7.cost) >= 0) {
        document.getElementById("t7-triangle-unlock").classList.add("btn-can-afford")
        document.getElementById("t7-triangle-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("t7-triangle-unlock").classList.add("btn-cant-afford")
        document.getElementById("t7-triangle-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator.tier7.hasUnlocked == true) {
        document.getElementById("tri-gen-t7-lvl").innerHTML = `${formatValueNoDecimal(playerData.trianglesGenerator.tier7.lvl)} ${playerData.shop.items.triangles.hasBought ? `(${playerData.trianglesGenerator.tier7.amountBought})` : ""} ${playerData.shop.items.triangles.hasBought ? `x${formatValue(playerData.trianglesGenerator.tier7.multiplier)}` : ""}`
        document.getElementById("tri-gen-t7-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier7.lvl.mul(playerData.trianglesGenerator.tier7.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
        document.getElementById("tri-gen-t7-buy-btn-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier7.cost)
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier7.cost) >= 0) {
            document.getElementById("tri-gen-t7-buy-btn").classList.add("btn-can-afford")
            document.getElementById("tri-gen-t7-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("tri-gen-t7-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("tri-gen-t7-buy-btn").classList.remove("btn-can-afford")
        }
    }
}
function unlockLightning() {
    if (playerData.trianglesGenerator.lightning.hasUnlocked == false && playerData.trianglesAmount.sub("1e18") >= 0) {
        playerData.trianglesGenerator.lightning.hasUnlocked = true
        document.getElementById("lightning-info").style.display = "block"
        document.getElementById("lightning-line").style.display = "block"
    }
}
function buyLightning() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.lightning.cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.lightning.cost)
        playerData.trianglesGenerator.lightning.cost = playerData.trianglesGenerator.lightning.cost.mul(playerData.trianglesGenerator.lightning.costIncrease)
        playerData.trianglesGenerator.lightning.lightningAmount = playerData.trianglesGenerator.lightning.lightningAmount.add("1")
        playerData.trianglesGenerator.lightning.effectiveness = playerData.trianglesGenerator.lightning.lightningAmount.mul("0.1").add("1")
    }
}
function upgradeTriangleGenerator(tier) {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator["tier" + tier].cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator["tier" + tier].cost)
        playerData.trianglesGenerator["tier" + tier].lvl = playerData.trianglesGenerator["tier" + tier].lvl.add("1")
        playerData.trianglesGenerator["tier" + tier].cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator["tier" + tier].cost, playerData.trianglesGenerator["tier" + tier].costIncrease))
        if (playerData.shop.items.triangles.hasBought == true) {
            playerData.trianglesGenerator["tier" + tier].amountBought++;
            if (playerData.trianglesGenerator["tier" + tier].amountBought == 10) {
                playerData.trianglesGenerator["tier" + tier].amountBought = 0
                playerData.trianglesGenerator["tier" + tier].multiplier = playerData.trianglesGenerator["tier" + tier].multiplier.mul("2")
            }
        }
    } 
}
function unlockFirstTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier1.cost) >= 0) {
        playerData.trianglesGenerator.tier1.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub("10")
        playerData.trianglesGenerator.tier1.lvl = playerData.trianglesGenerator.tier1.lvl.add("1")
        document.getElementById("t1-triangle-unlock").style.display = "none"
        document.getElementById("gain-txt").style.display = "block"
        document.getElementById("gen-list").style.display = "grid"
        document.getElementById("tri-gen-t1").style.display = "grid"
        document.getElementById("tab-list").style.display = "block"
        playerData.trianglesGenerator.tier1.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier1.cost, playerData.trianglesGenerator.tier1.costIncrease))
    }
}
function showSecondUnlockButton() {
    if (playerData.trianglesGenerator.tier2.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier2.cost.div("2")) >= 0) {
        document.getElementById("tri-gen-t2-container").style.display = "block"
        document.getElementById("t2-triangle-unlock").style.display = "block"
        document.getElementById("tri-gen-t2-container").style.padding = "20px"
        document.getElementById("t1-line").style.display = "block"
    }
}
function unlockSecondTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier2.cost) >= 0) {
        playerData.trianglesGenerator.tier2.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier2.cost)
        playerData.trianglesGenerator.tier2.lvl = new Decimal("1")
        document.getElementById("tri-gen-t2-container").style.padding = "0"
        document.getElementById("t2-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t2").style.display = "grid"
        document.getElementById("t1-line").style.display = "block"
        playerData.trianglesGenerator.tier2.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier2.cost, playerData.trianglesGenerator.tier2.costIncrease))
    }
}
function showThirdUnlockButton() {
    if (playerData.trianglesGenerator.tier2.hasUnlocked == true && playerData.trianglesGenerator.tier3.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier3.cost.div("2")) >= 0) {
        document.getElementById("tri-gen-t3-container").style.display = "block"
        document.getElementById("t3-triangle-unlock").style.display = "block"
        document.getElementById("tri-gen-t3-container").style.padding = "20px"
        document.getElementById("t2-line").style.display = "block"
    }
}
function unlockThirdTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier3.cost) >= 0) {
        playerData.trianglesGenerator.tier3.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier3.cost)
        playerData.trianglesGenerator.tier3.lvl = new Decimal("1")
        document.getElementById("tri-gen-t3-container").style.padding = "0"
        document.getElementById("t3-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t3").style.display = "grid"
        document.getElementById("t2-line").style.display = "block"
        playerData.trianglesGenerator.tier3.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier3.cost, playerData.trianglesGenerator.tier3.costIncrease))
    }
}
function unlockFourthTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier4.cost) >= 0) {
        playerData.trianglesGenerator.tier4.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier4.cost)
        playerData.trianglesGenerator.tier4.lvl = new Decimal("1")
        document.getElementById("tri-gen-t4-container").style.padding = "0"
        document.getElementById("t4-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t4").style.display = "grid"
        document.getElementById("t3-line").style.display = "block"
        playerData.trianglesGenerator.tier4.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier4.cost, playerData.trianglesGenerator.tier4.costIncrease))
    }
}
function showFifthUnlockButton() {
    if (playerData.trianglesGenerator.tier4.hasUnlocked == true && playerData.trianglesGenerator.tier5.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier5.cost.div("2")) >= 0) {
        document.getElementById("tri-gen-t5-container").style.display = "block"
        document.getElementById("t5-triangle-unlock").style.display = "block"
        document.getElementById("tri-gen-t5-container").style.padding = "20px"
        document.getElementById("t4-line").style.display = "block"
    }
}
function unlockFifthTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier5.cost) >= 0) {
        playerData.trianglesGenerator.tier5.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier5.cost)
        playerData.trianglesGenerator.tier5.lvl = new Decimal("1")
        document.getElementById("tri-gen-t5-container").style.padding = "0"
        document.getElementById("t5-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t5").style.display = "grid"
        document.getElementById("t4-line").style.display = "block"
        playerData.trianglesGenerator.tier5.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier5.cost, playerData.trianglesGenerator.tier5.costIncrease))
    }
}
function showSixthUnlockButton() {
    if (playerData.trianglesGenerator.tier5.hasUnlocked == true && playerData.trianglesGenerator.tier6.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier6.cost.div("2")) >= 0) {
        document.getElementById("tri-gen-t6-container").style.display = "block"
        document.getElementById("t6-triangle-unlock").style.display = "block"
        document.getElementById("tri-gen-t6-container").style.padding = "20px"
        document.getElementById("t5-line").style.display = "block"
    }
}
function unlockSixthTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier6.cost) >= 0) {
        playerData.trianglesGenerator.tier6.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier6.cost)
        playerData.trianglesGenerator.tier6.lvl = new Decimal("1")
        document.getElementById("tri-gen-t6-container").style.padding = "0"
        document.getElementById("t6-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t6").style.display = "grid"
        document.getElementById("t5-line").style.display = "block"
        playerData.trianglesGenerator.tier6.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier6.cost, playerData.trianglesGenerator.tier6.costIncrease))
    }
}
function showSeventhUnlockButton() {
    if (playerData.trianglesGenerator.tier6.hasUnlocked == true && playerData.trianglesGenerator.tier7.hasUnlocked == false && playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier7.cost.div("2")) >= 0) {
        document.getElementById("tri-gen-t7-container").style.display = "block"
        document.getElementById("t7-triangle-unlock").style.display = "block"
        document.getElementById("tri-gen-t7-container").style.padding = "20px"
        document.getElementById("t6-line").style.display = "block"
    }
}
function unlockSeventhTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier7.cost) >= 0) {
        playerData.trianglesGenerator.tier7.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier7.cost)
        playerData.trianglesGenerator.tier7.lvl = new Decimal("1")
        document.getElementById("tri-gen-t7-container").style.padding = "0"
        document.getElementById("t7-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t7").style.display = "grid"
        document.getElementById("t6-line").style.display = "block"
        playerData.trianglesGenerator.tier7.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier7.cost, playerData.trianglesGenerator.tier7.costIncrease))
    }
}