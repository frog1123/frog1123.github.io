setInterval(update, 100)
function update() {
    updateTrianglesAmountText()
    //
    incrementTrianglesAmount()
    //
    updateTrianglesAmountText()
    updateTriangleGenerators()
    showSecondUnlockButton()
}
setInterval(produceGenerators, 1000)
function produceGenerators() {
    incrementTier1TrianglesGenerator()
}
function updateTrianglesAmountText() {
    document.getElementById("triangles-amount-txt").innerHTML = playerData.trianglesAmount
    document.getElementById("triangle-gaining-txt").innerHTML = trianglesPerSec()
}
function trianglesPerSec() {
    return playerData.trianglesGenerator.tier1.lvl
}
function incrementTier1TrianglesGenerator() {
    playerData.trianglesGenerator.tier1.lvl = playerData.trianglesGenerator.tier1.lvl.add(playerData.trianglesGenerator.tier2.lvl)
}