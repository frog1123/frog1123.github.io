function exportData() {
    let exportData = btoa(JSON.stringify(playerData))
    navigator.clipboard.writeText(exportData)

    alert("Save copied to clipboard!")
}
function importData() {
    let importedData = JSON.parse(atob(prompt("Input your save. This will overwrite your current save.")))
    
    loadData(importedData)
}