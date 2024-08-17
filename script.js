
console.log("this is script file")
let inputField = document.getElementById("userInput")
let button = document.getElementById("addButton")
let noteslist = document.getElementById("notesList")

function addNotes(){
    let inputValue=inputField.value.trim()
    if (inputValue!==""){
    let list = document.createElement("li")
    list.textContent= inputField.value.trim()
    noteslist.appendChild(list);
    console.log(inputField.value)}
}
=======
