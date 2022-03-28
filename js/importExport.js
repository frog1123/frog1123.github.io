function exportData() {
    let exportData = btoa(JSON.stringify(playerData))
    navigator.clipboard.writeText(exportData)

    alert("Save copied to clipboard!")
}
function importData() {
    let importedData = JSON.parse(atob(prompt("Input your save. This will overwrite your current save.")))
    
    playerData.trianglesAmount = new Decimal(importedData.trianglesAmount)

    playerData.trianglesGenerator.lightning.hasUnlocked = importedData.trianglesGenerator.lightning.hasUnlocked
    playerData.trianglesGenerator.lightning.cost = new Decimal(importedData.trianglesGenerator.lightning.cost)
    playerData.trianglesGenerator.lightning.costIncrease = new Decimal(importedData.trianglesGenerator.lightning.costIncrease)
    playerData.trianglesGenerator.lightning.lightningAmount = new Decimal(importedData.trianglesGenerator.lightning.lightningAmount)
    playerData.trianglesGenerator.lightning.effectiveness = new Decimal(importedData.trianglesGenerator.lightning.effectiveness)

    playerData.trianglesGenerator.tier1.hasUnlocked = importedData.trianglesGenerator.tier1.hasUnlocked
    playerData.trianglesGenerator.tier2.hasUnlocked = importedData.trianglesGenerator.tier2.hasUnlocked
    playerData.trianglesGenerator.tier3.hasUnlocked = importedData.trianglesGenerator.tier3.hasUnlocked
    playerData.trianglesGenerator.tier4.hasUnlocked = importedData.trianglesGenerator.tier4.hasUnlocked
    playerData.trianglesGenerator.tier5.hasUnlocked = importedData.trianglesGenerator.tier5.hasUnlocked
    playerData.trianglesGenerator.tier6.hasUnlocked = importedData.trianglesGenerator.tier6.hasUnlocked
    playerData.trianglesGenerator.tier7.hasUnlocked = importedData.trianglesGenerator.tier7.hasUnlocked
    

    playerData.trianglesGenerator.tier1.cost = new Decimal(importedData.trianglesGenerator.tier1.cost)
    playerData.trianglesGenerator.tier2.cost = new Decimal(importedData.trianglesGenerator.tier2.cost)
    playerData.trianglesGenerator.tier3.cost = new Decimal(importedData.trianglesGenerator.tier3.cost)
    playerData.trianglesGenerator.tier4.cost = new Decimal(importedData.trianglesGenerator.tier4.cost)
    playerData.trianglesGenerator.tier5.cost = new Decimal(importedData.trianglesGenerator.tier5.cost)
    playerData.trianglesGenerator.tier6.cost = new Decimal(importedData.trianglesGenerator.tier6.cost)
    playerData.trianglesGenerator.tier7.cost = new Decimal(importedData.trianglesGenerator.tier7.cost)

    playerData.trianglesGenerator.tier1.costIncrease = new Decimal(importedData.trianglesGenerator.tier1.costIncrease)
    playerData.trianglesGenerator.tier2.costIncrease = new Decimal(importedData.trianglesGenerator.tier2.costIncrease)
    playerData.trianglesGenerator.tier3.costIncrease = new Decimal(importedData.trianglesGenerator.tier3.costIncrease)
    playerData.trianglesGenerator.tier4.costIncrease = new Decimal(importedData.trianglesGenerator.tier4.costIncrease)
    playerData.trianglesGenerator.tier5.costIncrease = new Decimal(importedData.trianglesGenerator.tier5.costIncrease)
    playerData.trianglesGenerator.tier6.costIncrease = new Decimal(importedData.trianglesGenerator.tier6.costIncrease)
    playerData.trianglesGenerator.tier7.costIncrease = new Decimal(importedData.trianglesGenerator.tier7.costIncrease)

    playerData.trianglesGenerator.tier1.lvl = new Decimal(importedData.trianglesGenerator.tier1.lvl)
    playerData.trianglesGenerator.tier2.lvl = new Decimal(importedData.trianglesGenerator.tier2.lvl)
    playerData.trianglesGenerator.tier3.lvl = new Decimal(importedData.trianglesGenerator.tier3.lvl)
    playerData.trianglesGenerator.tier4.lvl = new Decimal(importedData.trianglesGenerator.tier4.lvl)
    playerData.trianglesGenerator.tier5.lvl = new Decimal(importedData.trianglesGenerator.tier5.lvl)
    playerData.trianglesGenerator.tier6.lvl = new Decimal(importedData.trianglesGenerator.tier6.lvl)
    playerData.trianglesGenerator.tier7.lvl = new Decimal(importedData.trianglesGenerator.tier7.lvl)

    playerData.shop.hasUnlocked = importedData.shop.hasUnlocked
    playerData.shop.items.circle.hasBought = importedData.shop.items.circle.hasBought
    playerData.shop.items.triangles.hasBought = importedData.shop.items.triangles.hasBought
    playerData.shop.items.square.hasBought = importedData.shop.items.square.hasBought

    showUnlocked()
}