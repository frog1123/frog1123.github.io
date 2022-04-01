function updateUI() {
    document.getElementById("triangles-amount-txt").innerHTML = formatValue(playerData.trianglesAmount)
    document.getElementById("triangle-gaining-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier1.lvl.mul(playerData.trianglesGenerator.tier1.multiplier))

    unlockLightning()
    updateLightning()
    updateLightningGenerator(1)

    updateTriangleGenerator(1)
    updateTriangleGenerator(2)
    updateTriangleGenerator(3)
    updateTriangleGenerator(4)
    updateTriangleGenerator(5)
    updateTriangleGenerator(6)
    updateTriangleGenerator(7)

    document.getElementById("tri-gen-t1-unlock-cost-txt").innerHTML = formatValue(playerData.trianglesGenerator.tier1.cost)
    showTriangleUnlockButton(2)
    showTriangleUnlockButton(3)
    showTriangleUnlockButton(4)
    showTriangleUnlockButton(5)
    showTriangleUnlockButton(6)
    showTriangleUnlockButton(7)

    showShopUnlock()
    updateShopUnlock()
    updateShopButton(1, "circle")
    updateShopButton(1, "triangles")
    updateShopButton(1, "square")
    updateShopButton(2, "thunder")
    updateShopButton(2, "storm")
    updateShopButton(2, "diamond")
    updateShopUnlockButton(2)
}
document.getElementById("save-data-btn").onclick = function() {
    saveData()
}
document.getElementById("load-data-btn").onclick = function() {
    loadData(JSON.parse(atob(localStorage.getItem("playerData"))))
}
document.getElementById("export-data-btn").onclick = function() {
    exportData()
}
document.getElementById("import-data-btn").onclick = function() {
    importData()
}