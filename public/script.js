//Indexed DB is non-relational database (NoSqL Database)
//Stores: JS objects, files, blobs etc
//Indexed DB provides Object Store
// One Key per Object store - it helps to search data
// IndexedDB  - it is designed to work with callbacks and events


const controlHTML = document.getElementById("controlSection")
const displayHTML = controlHTML.firstElementChild
const startHTML = controlHTML.children[1]
const stopHTML = controlHTML.children[2]
const resetHTML = controlHTML.children[3]

startHTML.addEventListener("click",startTimer)
stopHTML.onclick = stopTimer
resetHTML.onclick = resetTimer


function startTimer(){
   console.log("START")
}

function stopTimer(){
    console.log("STOP")

}

function resetTimer(){
    console.log("RESET")
}