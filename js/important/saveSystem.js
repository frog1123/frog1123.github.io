function saveData() {
    localStorage.setItem("playerData", btoa(JSON.stringify(playerData)))

    console.log(localStorage)
}
function loadData(dataToLoad) {
    playerData.trianglesAmount = new Decimal(dataToLoad.trianglesAmount)

    playerData.trianglesGenerator.lightning.hasUnlocked = dataToLoad.trianglesGenerator.lightning.hasUnlocked
    playerData.trianglesGenerator.lightning.showUnlock = new Decimal(dataToLoad.trianglesGenerator.lightning.showUnlocked)
    playerData.trianglesGenerator.lightning.cost = new Decimal(dataToLoad.trianglesGenerator.lightning.cost)
    playerData.trianglesGenerator.lightning.costIncrease = new Decimal(dataToLoad.trianglesGenerator.lightning.costIncrease)
    playerData.trianglesGenerator.lightning.lightningAmount = new Decimal(dataToLoad.trianglesGenerator.lightning.lightningAmount)
    playerData.trianglesGenerator.lightning.effectiveness = new Decimal(dataToLoad.trianglesGenerator.lightning.effectiveness)

    playerData.trianglesGenerator.tier1.hasUnlocked = dataToLoad.trianglesGenerator.tier1.hasUnlocked
    playerData.trianglesGenerator.tier2.hasUnlocked = dataToLoad.trianglesGenerator.tier2.hasUnlocked
    playerData.trianglesGenerator.tier3.hasUnlocked = dataToLoad.trianglesGenerator.tier3.hasUnlocked
    playerData.trianglesGenerator.tier4.hasUnlocked = dataToLoad.trianglesGenerator.tier4.hasUnlocked
    playerData.trianglesGenerator.tier5.hasUnlocked = dataToLoad.trianglesGenerator.tier5.hasUnlocked
    playerData.trianglesGenerator.tier6.hasUnlocked = dataToLoad.trianglesGenerator.tier6.hasUnlocked
    playerData.trianglesGenerator.tier7.hasUnlocked = dataToLoad.trianglesGenerator.tier7.hasUnlocked

    playerData.trianglesGenerator.tier1.showUnlocked = new Decimal(dataToLoad.trianglesGenerator.tier1.showUnlocked)
    playerData.trianglesGenerator.tier2.showUnlocked = new Decimal(dataToLoad.trianglesGenerator.tier2.showUnlocked)
    playerData.trianglesGenerator.tier3.showUnlocked = new Decimal(dataToLoad.trianglesGenerator.tier3.showUnlocked)
    playerData.trianglesGenerator.tier4.showUnlocked = new Decimal(dataToLoad.trianglesGenerator.tier4.showUnlocked)
    playerData.trianglesGenerator.tier5.showUnlocked = new Decimal(dataToLoad.trianglesGenerator.tier5.showUnlocked)
    playerData.trianglesGenerator.tier6.showUnlocked = new Decimal(dataToLoad.trianglesGenerator.tier6.showUnlocked)
    playerData.trianglesGenerator.tier7.showUnlocked = new Decimal(dataToLoad.trianglesGenerator.tier7.showUnlocked)
    
    playerData.trianglesGenerator.tier1.cost = new Decimal(dataToLoad.trianglesGenerator.tier1.cost)
    playerData.trianglesGenerator.tier2.cost = new Decimal(dataToLoad.trianglesGenerator.tier2.cost)
    playerData.trianglesGenerator.tier3.cost = new Decimal(dataToLoad.trianglesGenerator.tier3.cost)
    playerData.trianglesGenerator.tier4.cost = new Decimal(dataToLoad.trianglesGenerator.tier4.cost)
    playerData.trianglesGenerator.tier5.cost = new Decimal(dataToLoad.trianglesGenerator.tier5.cost)
    playerData.trianglesGenerator.tier6.cost = new Decimal(dataToLoad.trianglesGenerator.tier6.cost)
    playerData.trianglesGenerator.tier7.cost = new Decimal(dataToLoad.trianglesGenerator.tier7.cost)

    playerData.trianglesGenerator.tier1.costIncrease = new Decimal(dataToLoad.trianglesGenerator.tier1.costIncrease)
    playerData.trianglesGenerator.tier2.costIncrease = new Decimal(dataToLoad.trianglesGenerator.tier2.costIncrease)
    playerData.trianglesGenerator.tier3.costIncrease = new Decimal(dataToLoad.trianglesGenerator.tier3.costIncrease)
    playerData.trianglesGenerator.tier4.costIncrease = new Decimal(dataToLoad.trianglesGenerator.tier4.costIncrease)
    playerData.trianglesGenerator.tier5.costIncrease = new Decimal(dataToLoad.trianglesGenerator.tier5.costIncrease)
    playerData.trianglesGenerator.tier6.costIncrease = new Decimal(dataToLoad.trianglesGenerator.tier6.costIncrease)
    playerData.trianglesGenerator.tier7.costIncrease = new Decimal(dataToLoad.trianglesGenerator.tier7.costIncrease)

    playerData.trianglesGenerator.tier1.lvl = new Decimal(dataToLoad.trianglesGenerator.tier1.lvl)
    playerData.trianglesGenerator.tier2.lvl = new Decimal(dataToLoad.trianglesGenerator.tier2.lvl)
    playerData.trianglesGenerator.tier3.lvl = new Decimal(dataToLoad.trianglesGenerator.tier3.lvl)
    playerData.trianglesGenerator.tier4.lvl = new Decimal(dataToLoad.trianglesGenerator.tier4.lvl)
    playerData.trianglesGenerator.tier5.lvl = new Decimal(dataToLoad.trianglesGenerator.tier5.lvl)
    playerData.trianglesGenerator.tier6.lvl = new Decimal(dataToLoad.trianglesGenerator.tier6.lvl)
    playerData.trianglesGenerator.tier7.lvl = new Decimal(dataToLoad.trianglesGenerator.tier7.lvl)

    playerData.shop.hasUnlocked = dataToLoad.shop.hasUnlocked
    playerData.shop.showUnlock = new Decimal(dataToLoad.shop.showUnlock)
    playerData.shop.items.row1.circle.hasBought = dataToLoad.shop.items.row1.circle.hasBought
    playerData.shop.items.row1.triangles.hasBought = dataToLoad.shop.items.row1.triangles.hasBought
    playerData.shop.items.row1.square.hasBought = dataToLoad.shop.items.row1.square.hasBought

    console.log(dataToLoad)
    showUnlocked()
}
function showUnlocked() {
    if (playerData.trianglesGenerator.lightning.hasUnlocked === true) {
        document.getElementById("lightning-info").style.display = "block"
        document.getElementById("lightning-line").style.display = "block"
    }
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
    if (playerData.trianglesGenerator.tier4.hasUnlocked === true) {
        document.getElementById("tri-gen-t4-container").style.padding = "0"
        document.getElementById("t4-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t4").style.display = "grid"
        document.getElementById("t3-line").style.display = "block"
    }
    if (playerData.trianglesGenerator.tier5.hasUnlocked === true) {
        document.getElementById("tri-gen-t5-container").style.padding = "0"
        document.getElementById("t5-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t5").style.display = "grid"
        document.getElementById("t4-line").style.display = "block"
    }
    if (playerData.trianglesGenerator.tier6.hasUnlocked === true) {
        document.getElementById("tri-gen-t6-container").style.padding = "0"
        document.getElementById("t6-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t6").style.display = "grid"
        document.getElementById("t5-line").style.display = "block"
    }
    if (playerData.trianglesGenerator.tier7.hasUnlocked === true) {
        document.getElementById("tri-gen-t7-container").style.padding = "0"
        document.getElementById("t7-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t7").style.display = "grid"
        document.getElementById("t6-line").style.display = "block"
    }
    if (playerData.shop.hasUnlocked === true && playerData.trianglesGenerator.tier4.hasUnlocked === false) {
        document.getElementById("shop-list").style.display = "none"
        document.getElementById("t3-line").style.display = "block"
        document.getElementById("tri-gen-t4-container").style.padding = "20px"
        document.getElementById("shop-unlock").style.display = "none"
        document.getElementById("shop-tab").style.display = "block"
        document.getElementById("t4-triangle-unlock").style.display = "block"
    }
    if (playerData.shop.hasUnlocked === true && playerData.trianglesGenerator.tier4.hasUnlocked === true) {
        document.getElementById("shop-list").style.display = "none"
        document.getElementById("t3-line").style.display = "block"
        document.getElementById("shop-tab").style.display = "block"
        document.getElementById("tri-gen-t4-container").style.padding = "0"
        document.getElementById("t4-triangle-unlock").style.display = "none"
        document.getElementById("tri-gen-t4").style.display = "grid"
    }
    if (playerData.shop.items.row1.circle.hasBought === true) {
        document.getElementById("circle-buy-btn").classList.add("btn-already-bought")
        document.getElementById("circle-buy-btn-txt").innerHTML = "BOUGHT"
        document.getElementById("circle-buy-btn").classList.remove("btn-can-afford")
        document.getElementById("circle-buy-btn").classList.remove("btn-cant-afford")
    }
    if (playerData.shop.items.row1.triangles.hasBought === true) {
        document.getElementById("triangles-buy-btn").classList.add("btn-already-bought")
        document.getElementById("triangles-buy-btn-txt").innerHTML = "BOUGHT"
        document.getElementById("triangles-buy-btn").classList.remove("btn-can-afford")
        document.getElementById("triangles-buy-btn").classList.remove("btn-cant-afford")
    }
    if (playerData.shop.items.row1.square.hasBought === true) {
        document.getElementById("square-buy-btn").classList.add("btn-already-bought")
        document.getElementById("square-buy-btn-txt").innerHTML = "BOUGHT"
        document.getElementById("square-buy-btn").classList.remove("btn-can-afford")
        document.getElementById("square-buy-btn").classList.remove("btn-cant-afford")
    }
}