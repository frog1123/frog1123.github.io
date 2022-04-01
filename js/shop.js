function updateShopButton(row, item) {
    if (playerData.shop.items[`row${row}`][item].hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items[`row${row}`][item].cost) >= 0) {
        document.getElementById(`${item}-buy-btn`).classList.add("btn-can-afford")
        document.getElementById(`${item}-buy-btn`).classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById(`${item}-buy-btn`).classList.add("btn-cant-afford")
        document.getElementById(`${item}-buy-btn`).classList.remove("btn-can-afford")
    }
}
function showShopUnlock() {
    if (playerData.shop.hasUnlocked == false && playerData.trianglesGenerator.tier3.hasUnlocked === true && playerData.trianglesAmount.sub(playerData.shop.showUnlock) >= 0) {
        document.getElementById("t3-line").style.display = "block"
        document.getElementById("shop-unlock").style.display = "block"
        document.getElementById("tri-gen-t4-container").style.padding = "20px"
        document.getElementById("shop-unlock-cost-txt").innerHTML = formatValue(playerData.shop.cost)
    }
}
function updateShopUnlock() {
    if (playerData.trianglesAmount.sub(playerData.shop.cost) >= 0) {
        document.getElementById("shop-unlock").classList.add("btn-can-afford")
        document.getElementById("shop-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("shop-unlock").classList.add("btn-cant-afford")
        document.getElementById("shop-unlock").classList.remove("btn-can-afford")
    }
}
function updateShopUnlockButton(row) {
    if (playerData.trianglesAmount.sub(playerData.shop.items[`row${row}`].cost) >= 0) {
        document.getElementById(`unlock-shop-r${row}-btn`).classList.add("btn-can-afford")
        document.getElementById(`unlock-shop-r${row}-btn`).classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById(`unlock-shop-r${row}-btn`).classList.add("btn-cant-afford")
        document.getElementById(`unlock-shop-r${row}-btn`).classList.remove("btn-can-afford")
    }
}
function unlockShop() {
    if (playerData.trianglesAmount.sub("1e6") >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub("1e6")
        playerData.shop.hasUnlocked = true
        document.getElementById("shop-unlock").style.display = "none"
        document.getElementById("shop-tab").style.display = "block"
        document.getElementById("t4-triangle-unlock").style.display = "block"

        updateShopItemCost(1, "circle")
        updateShopItemCost(1, "triangles")
        updateShopItemCost(1, "square")
    }
}
function buyShopItem(row, item) {
    playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.shop.items[`row${row}`][item].cost)
    playerData.shop.items[`row${row}`][item].hasBought = true
    document.getElementById(`${item}-buy-btn`).classList.add("btn-already-bought")
    document.getElementById(`${item}-buy-btn-txt`).innerHTML = "BOUGHT"
    document.getElementById(`${item}-buy-btn`).classList.remove("btn-can-afford")
    document.getElementById(`${item}-buy-btn`).classList.remove("btn-cant-afford")
}
function buyCircle() {
    if (playerData.shop.items.row1.circle.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row1.circle.cost) >= 0) {
        buyShopItem(1, "circle")
        unlockSecondShopUnlockButton()
    }
}
function buyTriangles() {
    if (playerData.shop.items.row1.triangles.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row1.triangles.cost) >= 0) {
        buyShopItem(1, "triangles")
        unlockSecondShopUnlockButton()
    }
}
function buySquare() {
    if (playerData.shop.items.row1.square.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row1.square.cost) >= 0) {
        buyShopItem(1, "square")
        
        playerData.trianglesGenerator.tier1.costIncrease = playerData.trianglesGenerator.tier1.costIncrease.sub("1").div("2").add("1")
        playerData.trianglesGenerator.tier2.costIncrease = playerData.trianglesGenerator.tier2.costIncrease.sub("1").div("2").add("1")
        playerData.trianglesGenerator.tier3.costIncrease = playerData.trianglesGenerator.tier3.costIncrease.sub("1").div("2").add("1")
        playerData.trianglesGenerator.tier4.costIncrease = playerData.trianglesGenerator.tier4.costIncrease.sub("1").div("2").add("1")
        playerData.trianglesGenerator.tier5.costIncrease = playerData.trianglesGenerator.tier5.costIncrease.sub("1").div("2").add("1")
        playerData.trianglesGenerator.tier6.costIncrease = playerData.trianglesGenerator.tier6.costIncrease.sub("1").div("2").add("1")
        playerData.trianglesGenerator.tier7.costIncrease = playerData.trianglesGenerator.tier7.costIncrease.sub("1").div("2").add("1")

        unlockSecondShopUnlockButton()
    }
}
function buyThunder() {
    if (playerData.shop.items.row2.thunder.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row2.thunder.cost) >= 0) {
        buyShopItem(2, "thunder")
    }
}
function buyStorm() {
    if (playerData.shop.items.row2.storm.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row2.storm.cost) >= 0) {
        buyShopItem(2, "storm")
        playerData.trianglesGenerator.lightning.lightningGenerator.tier1.hasUnlocked = true
        document.getElementById("lightning-gen-t1-container").style.display = "block"
        document.getElementById("l1-line").style.display = "block"
    }
}
function buyDiamond() {
    if (playerData.shop.items.row2.diamond.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row2.diamond.cost) >= 0) {
        buyShopItem(2, "diamond")
        playerData.trianglesGenerator.lightning.costIncrease = playerData.trianglesGenerator.lightning.costIncrease.div("2")
    }
}
function unlockSecondShopUnlockButton() {
    if (playerData.shop.items.row1.circle.hasBought === true && playerData.shop.items.row1.square.hasBought === true && playerData.shop.items.row1.triangles.hasBought === true) {
        document.getElementById("unlock-shop-btn-container").style.padding = "20px"
        document.getElementById("unlock-shop-items-div-1").style.display = "block"
        document.getElementById("unlock-shop-r2-btn-txt").innerHTML = `Cost: ${formatValue(playerData.shop.items.row2.cost)}`
    }
}
function unlockShopItems(row) {
    if (playerData.trianglesAmount.sub(playerData.shop.items["row" + row].cost) >= 0) {
        playerData.shop.items[`row${row}`].hasUnlocked = true
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.shop.items["row" + row].cost)
        document.getElementById(`unlock-shop-items-div-${row - 1}`).style.display = "none"
        document.getElementById(`shop-items-${row}`).style.display = "grid"
        document.getElementById(`shop-line-${row - 1}`).style.display = "block"
        if (row === 2) {
            updateShopItemCost(2, "thunder")
            updateShopItemCost(2, "diamond")
            updateShopItemCost(2, "storm")
        }
    }
}
function updateShopItemCost(row, item) {
    document.getElementById(`${item}-buy-btn-txt`).innerHTML = `Cost: ${formatValue(playerData.shop.items[`row${row}`][item].cost)}`
}
function updateaadasdasd() {
    document.getElementById(`lightning-buy-btn-txt`).innerHTML = `Cost: ${formatValue(playerData.shop.items.row2.thunder.cost)}`
}