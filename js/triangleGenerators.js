function updateTriangleGenerators() {
    // tier1
    if (playerData.trianglesGenerator.tier1.hasUnlocked == true) {
        document.getElementById("tri-gen-t1-lvl").innerHTML = formatValueNoDecimal(playerData.trianglesGenerator.tier1.lvl)
        document.getElementById("tri-gen-t1-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier1.lvl)
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
    if (playerData.trianglesGenerator.tier2.hasUnlocked == false && playerData.trianglesAmount.sub("100") >= 0) {
        document.getElementById("t2-triangle-unlock").classList.add("btn-can-afford")
        document.getElementById("t2-triangle-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("t2-triangle-unlock").classList.add("btn-cant-afford")
        document.getElementById("t2-triangle-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator.tier2.hasUnlocked == true) {
        document.getElementById("tri-gen-t2-lvl").innerHTML = playerData.trianglesGenerator.tier2.lvl
        document.getElementById("tri-gen-t2-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier2.lvl)
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
    if (playerData.trianglesGenerator.tier3.hasUnlocked == false && playerData.trianglesAmount.sub("1e4") >= 0) {
        document.getElementById("t3-triangle-unlock").classList.add("btn-can-afford")
        document.getElementById("t3-triangle-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("t3-triangle-unlock").classList.add("btn-cant-afford")
        document.getElementById("t3-triangle-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator.tier3.hasUnlocked == true) {
        document.getElementById("tri-gen-t3-lvl").innerHTML = playerData.trianglesGenerator.tier3.lvl
        document.getElementById("tri-gen-t3-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier3.lvl)
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
    if (playerData.trianglesGenerator.tier4.hasUnlocked == false && playerData.trianglesAmount.sub("1e8") >= 0) {
        document.getElementById("t4-triangle-unlock").classList.add("btn-can-afford")
        document.getElementById("t4-triangle-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("t4-triangle-unlock").classList.add("btn-cant-afford")
        document.getElementById("t4-triangle-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.trianglesGenerator.tier4.hasUnlocked == true) {
        document.getElementById("tri-gen-t4-lvl").innerHTML = playerData.trianglesGenerator.tier4.lvl
        document.getElementById("tri-gen-t4-produce").innerHTML = formatValue(playerData.trianglesGenerator.tier4.lvl)
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
}
function incrementTrianglesAmount() {
    playerData.trianglesAmount = playerData.trianglesAmount.add(playerData.trianglesGenerator.tier1.lvl.div("10"))
}
function unlockFirstTriangleGenerator() {
    if (playerData.trianglesAmount.sub("10") >= 0) {
        playerData.trianglesGenerator.tier1.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub("10")
        playerData.trianglesGenerator.tier1.lvl = playerData.trianglesGenerator.tier1.lvl.add("1")
        document.getElementById("t1-triangle-unlock").style.display = "none"
        document.getElementById("gain-txt").style.display = "block"
        document.getElementById("gen-list").style.display = "grid"
        document.getElementById("tri-gen-t1").style.display = "grid"
        document.getElementById("tab-list").style.display = "block"
    }
}
function upgradeTriangleTier1Generator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier1.cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier1.cost)
        playerData.trianglesGenerator.tier1.lvl = playerData.trianglesGenerator.tier1.lvl.add("1")
        playerData.trianglesGenerator.tier1.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier1.cost, playerData.trianglesGenerator.tier1.costIncrease))
    }
}
function showSecondUnlockButton() {
    if (playerData.trianglesGenerator.tier2.hasUnlocked == false && playerData.trianglesAmount.sub("50") >= 0) {
        document.getElementById("tri-gen-t2-container").style.display = "block"
        document.getElementById("t2-triangle-unlock").style.display = "block"
        document.getElementById("tri-gen-t2-container").style.padding = "20px"
        document.getElementById("t1-line").style.display = "block"
    }
}
function unlockSecondTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier2.cost) >= 0) {
        playerData.trianglesGenerator.tier2.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub("100")
        playerData.trianglesGenerator.tier2.lvl = new Decimal("1")
        document.getElementById("tri-gen-t2-container").style.padding = "0"
        document.getElementById("t2-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t2").style.display = "grid"
        document.getElementById("t1-line").style.display = "block"
    }
}
function upgradeTriangleTier2Generator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier2.cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier2.cost)
        playerData.trianglesGenerator.tier2.lvl = playerData.trianglesGenerator.tier2.lvl.add("1")
        playerData.trianglesGenerator.tier2.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier2.cost, playerData.trianglesGenerator.tier2.costIncrease))
    }
}
function showThirdUnlockButton() {
    if (playerData.trianglesGenerator.tier2.hasUnlocked == true && playerData.trianglesGenerator.tier3.hasUnlocked == false && playerData.trianglesAmount.sub("1e4") >= 0) {
        document.getElementById("tri-gen-t3-container").style.display = "block"
        document.getElementById("t3-triangle-unlock").style.display = "block"
        document.getElementById("tri-gen-t3-container").style.padding = "20px"
        document.getElementById("t2-line").style.display = "block"
    }
}
function unlockThirdTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier3.cost) >= 0) {
        playerData.trianglesGenerator.tier3.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub("1e4")
        playerData.trianglesGenerator.tier3.lvl = new Decimal("1")
        document.getElementById("tri-gen-t3-container").style.padding = "0"
        document.getElementById("t3-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t3").style.display = "grid"
        document.getElementById("t2-line").style.display = "block"
    }
}
function upgradeTriangleTier3Generator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier3.cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier3.cost)
        playerData.trianglesGenerator.tier3.lvl = playerData.trianglesGenerator.tier3.lvl.add("1")
        playerData.trianglesGenerator.tier3.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier3.cost, playerData.trianglesGenerator.tier3.costIncrease))
    }
}
function unlockFourthTriangleGenerator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier4.cost) >= 0) {
        playerData.trianglesGenerator.tier4.hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub("1e8")
        playerData.trianglesGenerator.tier4.lvl = new Decimal("1")
        document.getElementById("tri-gen-t4-container").style.padding = "0"
        document.getElementById("t4-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t4").style.display = "grid"
        document.getElementById("t3-line").style.display = "block"
    }
}
function upgradeTriangleTier4Generator() {
    if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier4.cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier4.cost)
        playerData.trianglesGenerator.tier4.lvl = playerData.trianglesGenerator.tier4.lvl.add("1")
        playerData.trianglesGenerator.tier4.cost = Decimal.round(Decimal.pow(playerData.trianglesGenerator.tier4.cost, playerData.trianglesGenerator.tier4.costIncrease))
    }
}