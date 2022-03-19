setInterval(update, 100)
function update() {
    updateTrianglesAmountText()
    //
    incrementTrianglesAmount()
    //
    updateTrianglesAmountText()
    updateTriangleGenerators()
    showSecondUnlockButton()
    showThirdUnlockButton()
}
setInterval(produceGenerators, 1000)
function produceGenerators() {
    incrementTier1TrianglesGenerator()
    incrementTier2TrianglesGenerator()
}
function updateTrianglesAmountText() {
    document.getElementById("triangles-amount-txt").innerHTML = formatValue(playerData.trianglesAmount)
    document.getElementById("triangle-gaining-txt").innerHTML = formatValue(trianglesPerSec())
}
function trianglesPerSec() {
    return playerData.trianglesGenerator.tier1.lvl
}
function incrementTier1TrianglesGenerator() {
    playerData.trianglesGenerator.tier1.lvl = playerData.trianglesGenerator.tier1.lvl.add(playerData.trianglesGenerator.tier2.lvl)
}
function incrementTier2TrianglesGenerator() {
    playerData.trianglesGenerator.tier2.lvl = playerData.trianglesGenerator.tier2.lvl.add(playerData.trianglesGenerator.tier3.lvl)
}