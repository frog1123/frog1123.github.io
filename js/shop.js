function updateShopButtons(){playerData.trianglesAmount.sub("1e6")>=0?(document.getElementById("shop-unlock").classList.add("btn-can-afford"),document.getElementById("shop-unlock").classList.remove("btn-cant-afford")):(document.getElementById("shop-unlock").classList.add("btn-cant-afford"),document.getElementById("shop-unlock").classList.remove("btn-can-afford")),0==playerData.shop.items.circle.hasBought&&playerData.trianglesAmount.sub(playerData.shop.items.circle.cost)>=0?(document.getElementById("circle-buy-btn").classList.add("btn-can-afford"),document.getElementById("circle-buy-btn").classList.remove("btn-cant-afford")):(document.getElementById("circle-buy-btn").classList.add("btn-cant-afford"),document.getElementById("circle-buy-btn").classList.remove("btn-can-afford")),0==playerData.shop.items.triangles.hasBought&&playerData.trianglesAmount.sub(playerData.shop.items.triangles.cost)>=0?(document.getElementById("triangles-buy-btn").classList.add("btn-can-afford"),document.getElementById("triangles-buy-btn").classList.remove("btn-cant-afford")):(document.getElementById("triangles-buy-btn").classList.add("btn-cant-afford"),document.getElementById("triangles-buy-btn").classList.remove("btn-can-afford")),0==playerData.shop.items.square.hasBought&&playerData.trianglesAmount.sub(playerData.shop.items.square.cost)>=0?(document.getElementById("square-buy-btn").classList.add("btn-can-afford"),document.getElementById("square-buy-btn").classList.remove("btn-cant-afford")):(document.getElementById("square-buy-btn").classList.add("btn-cant-afford"),document.getElementById("square-buy-btn").classList.remove("btn-can-afford"))}function showShopUnlock(){0==playerData.shop.hasUnlocked&&1==playerData.trianglesGenerator.tier3.hasUnlocked&&playerData.trianglesAmount.sub("5e5")>=0&&(document.getElementById("t3-line").style.display="block",document.getElementById("shop-unlock").style.display="block",document.getElementById("tri-gen-t4-container").style.padding="20px")}function unlockShop(){playerData.trianglesAmount.sub("1e6")>=0&&(playerData.trianglesAmount=playerData.trianglesAmount.sub("1e6"),playerData.shop.hasUnlocked=!0,document.getElementById("shop-unlock").style.display="none",document.getElementById("shop-tab").style.display="block",document.getElementById("t4-triangle-unlock").style.display="block")}function buyCircle(){0==playerData.shop.items.circle.hasBought&&playerData.trianglesAmount.sub(playerData.shop.items.circle.cost)>=0&&(playerData.trianglesAmount=playerData.trianglesAmount.sub(playerData.shop.items.circle.cost),playerData.shop.items.circle.hasBought=!0,document.getElementById("circle-buy-btn").classList.add("btn-already-bought"),document.getElementById("circle-buy-btn-txt").innerHTML="BOUGHT",document.getElementById("circle-buy-btn").classList.remove("btn-can-afford"),document.getElementById("circle-buy-btn").classList.remove("btn-cant-afford"))}function buyTriangles(){0==playerData.shop.items.triangles.hasBought&&playerData.trianglesAmount.sub(playerData.shop.items.triangles.cost)>=0&&(playerData.trianglesAmount=playerData.trianglesAmount.sub(playerData.shop.items.triangles.cost),playerData.shop.items.triangles.hasBought=!0,document.getElementById("triangles-buy-btn").classList.add("btn-already-bought"),document.getElementById("triangles-buy-btn-txt").innerHTML="BOUGHT",document.getElementById("triangles-buy-btn").classList.remove("btn-can-afford"),document.getElementById("triangles-buy-btn").classList.remove("btn-cant-afford"))}function buySquare(){0==playerData.shop.items.square.hasBought&&playerData.trianglesAmount.sub(playerData.shop.items.square.cost)>=0&&(playerData.trianglesAmount=playerData.trianglesAmount.sub(playerData.shop.items.square.cost),playerData.shop.items.square.hasBought=!0,document.getElementById("square-buy-btn").classList.add("btn-already-bought"),document.getElementById("square-buy-btn-txt").innerHTML="BOUGHT",document.getElementById("square-buy-btn").classList.remove("btn-can-afford"),document.getElementById("square-buy-btn").classList.remove("btn-cant-afford"),playerData.trianglesGenerator.tier2.costIncrease=playerData.trianglesGenerator.tier1.costIncrease.sub("1").div("2").add("1"),playerData.trianglesGenerator.tier2.costIncrease=playerData.trianglesGenerator.tier2.costIncrease.sub("1").div("2").add("1"),playerData.trianglesGenerator.tier3.costIncrease=playerData.trianglesGenerator.tier3.costIncrease.sub("1").div("2").add("1"),playerData.trianglesGenerator.tier4.costIncrease=playerData.trianglesGenerator.tier4.costIncrease.sub("1").div("2").add("1"),playerData.trianglesGenerator.tier5.costIncrease=playerData.trianglesGenerator.tier5.costIncrease.sub("1").div("2").add("1"),playerData.trianglesGenerator.tier6.costIncrease=playerData.trianglesGenerator.tier6.costIncrease.sub("1").div("2").add("1"),playerData.trianglesGenerator.tier7.costIncrease=playerData.trianglesGenerator.tier7.costIncrease.sub("1").div("2").add("1"))}