document.querySelector("main").remove()
const newHeader = document.createElement("h1")
newHeader.id = "victory"
const personName = "Peter"
newHeader.textContent = personName + " is the champion"
console.log(newHeader)
document.body.append(newHeader) 








