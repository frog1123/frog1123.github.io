function saveData() {
    let playerDataSerialized = JSON.stringify(playerData)
    localStorage.setItem("playerData", playerDataSerialized)

    console.log(localStorage)
}
function loadData() {
    let playerDataDeserialized = JSON.parse(localStorage.getItem("playerData"))
    playerData.trianglesAmount = new Decimal(playerDataDeserialized.trianglesAmount)

    playerData.trianglesGenerator.tier1.hasUnlocked = playerDataDeserialized.trianglesGenerator.tier1.hasUnlocked
    playerData.trianglesGenerator.tier2.hasUnlocked = playerDataDeserialized.trianglesGenerator.tier2.hasUnlocked
    playerData.trianglesGenerator.tier3.hasUnlocked = playerDataDeserialized.trianglesGenerator.tier3.hasUnlocked

    playerData.trianglesGenerator.tier1.cost = new Decimal(playerDataDeserialized.trianglesGenerator.tier1.cost)
    playerData.trianglesGenerator.tier2.cost = new Decimal(playerDataDeserialized.trianglesGenerator.tier2.cost)
    playerData.trianglesGenerator.tier3.cost = new Decimal(playerDataDeserialized.trianglesGenerator.tier3.cost)

    playerData.trianglesGenerator.tier1.costIncrease = new Decimal(playerDataDeserialized.trianglesGenerator.tier1.costIncrease)
    playerData.trianglesGenerator.tier2.costIncrease = new Decimal(playerDataDeserialized.trianglesGenerator.tier2.costIncrease)
    playerData.trianglesGenerator.tier3.costIncrease = new Decimal(playerDataDeserialized.trianglesGenerator.tier3.costIncrease)

    playerData.trianglesGenerator.tier1.lvl = new Decimal(playerDataDeserialized.trianglesGenerator.tier1.lvl)
    playerData.trianglesGenerator.tier2.lvl = new Decimal(playerDataDeserialized.trianglesGenerator.tier2.lvl)
    playerData.trianglesGenerator.tier3.lvl = new Decimal(playerDataDeserialized.trianglesGenerator.tier3.lvl)

    console.log(playerDataDeserialized)
    showUnlocked()
}
function showUnlocked() {
    if (playerData.trianglesGenerator.tier1.hasUnlocked === true) {
        document.getElementById("t1-triangle-unlock").style.display = "none"
        document.getElementById("gain-txt").style.display = "block"
        document.getElementById("gen-list").style.display = "grid"
        document.getElementById("tri-gen-t1").style.display = "grid"
        document.getElementById("tab-list").style.display = "block"
    }
    if (playerData.trianglesGenerator.tier2.hasUnlocked === true) {
        document.getElementById("tri-gen-t2-container").style.padding = "0"
        document.getElementById("t2-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t2").style.display = "grid"
        document.getElementById("t1-line").style.display = "block"
    }
    if (playerData.trianglesGenerator.tier3.hasUnlocked === true) {
        document.getElementById("tri-gen-t3-container").style.padding = "0"
        document.getElementById("t3-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t3").style.display = "grid"
        document.getElementById("t2-line").style.display = "block"
    }
}