function updateShopButtons() {
    if (playerData.trianglesAmount.sub("1e6") >= 0) {
        document.getElementById("shop-unlock").classList.add("btn-can-afford")
        document.getElementById("shop-unlock").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("shop-unlock").classList.add("btn-cant-afford")
        document.getElementById("shop-unlock").classList.remove("btn-can-afford")
    }
}
function showShopUnlock() {
    if (playerData.shop.hasUnlocked == false && playerData.trianglesGenerator.tier3.hasUnlocked == true && playerData.trianglesAmount.sub("5e5") >= 0) {
        document.getElementById("t3-line").style.display = "block"
        document.getElementById("shop-unlock").style.display = "block"
        document.getElementById("tri-gen-t4-container").style.padding = "20px"
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