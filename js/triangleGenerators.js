function updateTriangleGenerators() {
    // tier1
    if (playerData.trianglesGenerator.tier1.hasUnlocked == true) {
        document.getElementById("tri-gen-t1-lvl").innerHTML = `LVL ${playerData.trianglesGenerator.tier1.lvl.toFixed()}`
        document.getElementById("tri-gen-t1-produce").innerHTML = `Producing ${playerData.trianglesGenerator.tier1.lvl}/s`
        document.getElementById("tri-gen-t1-buy-btn-txt").innerHTML = `Cost: ${playerData.trianglesGenerator.tier1.cost.toFixed(3)}`
        if (playerData.trianglesAmount.sub("100") >= 0) {
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
        document.getElementById("tri-gen-t2-lvl").innerHTML = `LVL ${playerData.trianglesGenerator.tier2.lvl.toFixed()}`
        document.getElementById("tri-gen-t2-produce").innerHTML = `Producing ${playerData.trianglesGenerator.tier2.lvl} T1 Generator/s`
        document.getElementById("tri-gen-t2-buy-btn-txt").innerHTML = `Cost: ${playerData.trianglesGenerator.tier2.cost.toFixed(3)}`
        if (playerData.trianglesAmount.sub(playerData.trianglesGenerator.tier2.cost) >= 0) {
            document.getElementById("tri-gen-t2-buy-btn").classList.add("btn-can-afford")
            document.getElementById("tri-gen-t2-buy-btn").classList.remove("btn-cant-afford")
        }
        else {
            document.getElementById("tri-gen-t2-buy-btn").classList.add("btn-cant-afford")
            document.getElementById("tri-gen-t2-buy-btn").classList.remove("btn-can-afford")
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
        playerData.trianglesGenerator.tier1.lvl = new Decimal("1")
        document.getElementById("t1-triangle-unlock").style.display = "none"
        document.getElementById("gen-list").style.display = "grid"
        document.getElementById("tri-gen-t1").style.display = "grid"
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