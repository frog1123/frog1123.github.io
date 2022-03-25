setInterval(update, 100)
function update() {
    updateTrianglesAmountText()
    updateTriangleGenerators()
    updateShopButtons()
    //
    incrementTrianglesAmount()
    //
    showSecondUnlockButton()
    showThirdUnlockButton()
    showShopUnlock()
    showFifthUnlockButton()
    showSixthUnlockButton()
    showSeventhUnlockButton()
}
setTimeout(produceGenerators, (playerData.shop.items.circle.hasBought ? 100 : 1000))
function incrementTrianglesAmount() {
    playerData.trianglesAmount = playerData.trianglesAmount.add(playerData.trianglesGenerator.tier1.lvl.div("10").mul(playerData.trianglesGenerator.tier1.multiplier))
}
function produceGenerators() {
    playerData.trianglesGenerator.tier1.lvl = playerData.trianglesGenerator.tier1.lvl.add(playerData.trianglesGenerator.tier2.lvl.div(playerData.shop.items.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier2.multiplier))
    playerData.trianglesGenerator.tier2.lvl = playerData.trianglesGenerator.tier2.lvl.add(playerData.trianglesGenerator.tier3.lvl.div(playerData.shop.items.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier3.multiplier))
    playerData.trianglesGenerator.tier3.lvl = playerData.trianglesGenerator.tier3.lvl.add(playerData.trianglesGenerator.tier4.lvl.div(playerData.shop.items.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier4.multiplier))
    playerData.trianglesGenerator.tier4.lvl = playerData.trianglesGenerator.tier4.lvl.add(playerData.trianglesGenerator.tier5.lvl.div(playerData.shop.items.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier5.multiplier))
    playerData.trianglesGenerator.tier5.lvl = playerData.trianglesGenerator.tier5.lvl.add(playerData.trianglesGenerator.tier6.lvl.div(playerData.shop.items.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier6.multiplier))
    playerData.trianglesGenerator.tier6.lvl = playerData.trianglesGenerator.tier6.lvl.add(playerData.trianglesGenerator.tier7.lvl.div(playerData.shop.items.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier7.multiplier))

    setTimeout(produceGenerators, (playerData.shop.items.circle.hasBought ? 100 : 1000))
}
function updateTrianglesAmountText() {
    document.getElementById("triangles-amount-txt").innerHTML = formatValue(playerData.trianglesAmount)
    document.getElementById("triangle-gaining-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier1.lvl.mul(playerData.trianglesGenerator.tier1.multiplier))
}