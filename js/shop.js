function updateShopButtons() {
    if (playerData.trianglesAmount.sub("1e6") >= 0) {
        document.getElementById("shop-unlock").classList.add("btn-can-afford")
        document.getElementById("shop-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("shop-unlock").classList.add("btn-cant-afford")
        document.getElementById("shop-unlock").classList.remove("btn-can-afford")
    }
    if (playerData.shop.items.row1.circle.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row1.circle.cost) >= 0) {
        document.getElementById("circle-buy-btn").classList.add("btn-can-afford")
        document.getElementById("circle-buy-btn").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("circle-buy-btn").classList.add("btn-cant-afford")
        document.getElementById("circle-buy-btn").classList.remove("btn-can-afford")
    }
    if (playerData.shop.items.row1.triangles.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row1.triangles.cost) >= 0) {
        document.getElementById("triangles-buy-btn").classList.add("btn-can-afford")
        document.getElementById("triangles-buy-btn").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("triangles-buy-btn").classList.add("btn-cant-afford")
        document.getElementById("triangles-buy-btn").classList.remove("btn-can-afford")
    }
    if (playerData.shop.items.row1.square.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row1.square.cost) >= 0) {
        document.getElementById("square-buy-btn").classList.add("btn-can-afford")
        document.getElementById("square-buy-btn").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("square-buy-btn").classList.add("btn-cant-afford")
        document.getElementById("square-buy-btn").classList.remove("btn-can-afford")
    }
}
function showShopUnlock() {
    if (playerData.shop.hasUnlocked == false && playerData.trianglesGenerator.tier3.hasUnlocked === true && playerData.trianglesAmount.sub("5e5") >= 0) {
        document.getElementById("t3-line").style.display = "block"
        document.getElementById("shop-unlock").style.display = "block"
        document.getElementById("tri-gen-t4-container").style.padding = "20px"
        document.getElementById("shop-unlock-cost-txt").innerHTML = formatValue(playerData.shop.cost)
    }
}
function unlockShop() {
    if (playerData.trianglesAmount.sub("1e6") >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub("1e6")
        playerData.shop.hasUnlocked = true
        document.getElementById("shop-unlock").style.display = "none"
        document.getElementById("shop-tab").style.display = "block"
        document.getElementById("t4-triangle-unlock").style.display = "block"
    }
}
function buyCircle() {
    if (playerData.shop.items.row1.circle.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row1.circle.cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.shop.items.row1.circle.cost)
        playerData.shop.items.row1.circle.hasBought = true
        document.getElementById("circle-buy-btn").classList.add("btn-already-bought")
        document.getElementById("circle-buy-btn-txt").innerHTML = "BOUGHT"
        document.getElementById("circle-buy-btn").classList.remove("btn-can-afford")
        document.getElementById("circle-buy-btn").classList.remove("btn-cant-afford")

        unlockSecondShopUnlockButton()
    }
}
function buyTriangles() {
    if (playerData.shop.items.row1.triangles.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row1.triangles.cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.shop.items.row1.triangles.cost)
        playerData.shop.items.row1.triangles.hasBought = true
        document.getElementById("triangles-buy-btn").classList.add("btn-already-bought")
        document.getElementById("triangles-buy-btn-txt").innerHTML = "BOUGHT"
        document.getElementById("triangles-buy-btn").classList.remove("btn-can-afford")
        document.getElementById("triangles-buy-btn").classList.remove("btn-cant-afford")

        unlockSecondShopUnlockButton()
    }
}
function buySquare() {
    if (playerData.shop.items.row1.square.hasBought === false && playerData.trianglesAmount.sub(playerData.shop.items.row1.square.cost) >= 0) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.shop.items.row1.square.cost)
        playerData.shop.items.row1.square.hasBought = true
        document.getElementById("square-buy-btn").classList.add("btn-already-bought")
        document.getElementById("square-buy-btn-txt").innerHTML = "BOUGHT"
        document.getElementById("square-buy-btn").classList.remove("btn-can-afford")
        document.getElementById("square-buy-btn").classList.remove("btn-cant-afford")
        
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
function unlockSecondShopUnlockButton() {
    if (playerData.shop.items.row1.circle.hasBought === true && playerData.shop.items.row1.square.hasBought === true && playerData.shop.items.row1.triangles.hasBought === true) {
        document.getElementById("unlock-shop-btn-container").style.padding = "20px"
        document.getElementById("unlock-shop-items-div-1").style.display = "block"
    }
}
function unlockShopItems(row) {
    if (playerData.trianglesAmount.sub(playerData.shop.items["row" + row].cost)) {
        playerData.trianglesAmount = playerData.trianglesAmount.sub(playerData.shop.items["row" + row].cost)
        document.getElementById(`unlock-shop-items-div-${row - 1}`).style.display = "none"
        document.getElementById(`shop-items-${row}`).style.display = "grid"
        document.getElementById(`shop-line-${row - 1}`).style.display = "block"
    }
}