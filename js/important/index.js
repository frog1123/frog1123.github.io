setInterval(update, 100)
function update() {    
    updateUI()
    incrementTrianglesAmount()
}
setTimeout(produceTriangleGenerators, (playerData.shop.items.row1.circle.hasBought ? 100 : 1000))
function incrementTrianglesAmount() {
    playerData.trianglesAmount = playerData.trianglesAmount.add(playerData.trianglesGenerator.tier1.lvl.div("10").mul(playerData.trianglesGenerator.tier1.multiplier))
}
function produceTriangleGenerators() {
    playerData.trianglesGenerator.tier1.lvl = playerData.trianglesGenerator.tier1.lvl.add(playerData.trianglesGenerator.tier2.lvl.div(playerData.shop.items.row1.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier2.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
    playerData.trianglesGenerator.tier2.lvl = playerData.trianglesGenerator.tier2.lvl.add(playerData.trianglesGenerator.tier3.lvl.div(playerData.shop.items.row1.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier3.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
    playerData.trianglesGenerator.tier3.lvl = playerData.trianglesGenerator.tier3.lvl.add(playerData.trianglesGenerator.tier4.lvl.div(playerData.shop.items.row1.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier4.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
    playerData.trianglesGenerator.tier4.lvl = playerData.trianglesGenerator.tier4.lvl.add(playerData.trianglesGenerator.tier5.lvl.div(playerData.shop.items.row1.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier5.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
    playerData.trianglesGenerator.tier5.lvl = playerData.trianglesGenerator.tier5.lvl.add(playerData.trianglesGenerator.tier6.lvl.div(playerData.shop.items.row1.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier6.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))
    playerData.trianglesGenerator.tier6.lvl = playerData.trianglesGenerator.tier6.lvl.add(playerData.trianglesGenerator.tier7.lvl.div(playerData.shop.items.row1.circle.hasBought ? "10" : "1").mul(playerData.trianglesGenerator.tier7.multiplier).mul(playerData.trianglesGenerator.lightning.effectiveness))

    setTimeout(produceTriangleGenerators, (playerData.shop.items.row1.circle.hasBought ? 100 : 1000))
}
setInterval(produceLightningGenerators, 1000)
function produceLightningGenerators() {
    if (playerData.shop.items.row2.storm.hasBought === true) {
        if (playerData.trianglesGenerator.lightning.lightningGenerator.timer >= 3600) {
            playerData.trianglesGenerator.lightning.lightningAmount = playerData.trianglesGenerator.lightning.lightningAmount.add(playerData.trianglesGenerator.lightning.lightningGenerator.tier1.lvl)
            playerData.trianglesGenerator.lightning.lightningGenerator.timer = 0
        }
        console.log(playerData.trianglesGenerator.lightning.lightningGenerator.timer)
        playerData.trianglesGenerator.lightning.lightningGenerator.timer++
    }
}