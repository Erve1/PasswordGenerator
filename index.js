const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const charactersWithoutSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const charactersWithoutNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const charactersWithoutSymbolsAndNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

/* const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];  */

let firstPwEl = document.getElementById("firstPw-el")
let secondPwEl = document.getElementById("secondPw-el")
let warningEl = document.getElementById("warning-el")
let noteEl = document.getElementById("note-el")
let passwordLenght = 15
// let randomCharacter = []
let minimumLenght = 10
let maximumLenght = 24
 
function generatePwOne() {
    firstPwEl.textContent = ""
    var x = document.getElementById("pwLenght").value
    var symbolsList = document.getElementById("symbols")
    var numbersList = document.getElementById("numbers");
    
    if (symbolsList.checked == true && numbersList.checked == true && x <= maximumLenght && x >= minimumLenght) {
            for (let i=0; i < x; i++) {
            randomCharacter = Math.floor( Math.random() * characters.length )
            firstPwEl.textContent += characters[randomCharacter]
            warningEl.textContent = ""     
            }
    } else if (symbolsList.checked == false && numbersList.checked == true && x <= maximumLenght && x >= minimumLenght) {
            for (let i=0; i < x; i++) {
            randomCharacter = Math.floor( Math.random() * charactersWithoutSymbols.length )
            firstPwEl.textContent += charactersWithoutSymbols[randomCharacter]
            warningEl.textContent = ""     
            }  
    } else if (symbolsList.checked == true && numbersList.checked == false && x <= maximumLenght && x >= minimumLenght) {
            for (let i=0; i < x; i++) {
            randomCharacter = Math.floor( Math.random() * charactersWithoutNumbers.length )
            firstPwEl.textContent += charactersWithoutNumbers[randomCharacter]
            warningEl.textContent = ""     
            }
    } else if (symbolsList.checked == false && numbersList.checked == false && x <= maximumLenght && x >= minimumLenght) {
            for (let i=0; i < x; i++) {
            randomCharacter = Math.floor( Math.random() * charactersWithoutSymbolsAndNumbers.length )
            firstPwEl.textContent += charactersWithoutSymbolsAndNumbers[randomCharacter]
            warningEl.textContent = ""     
            }
    } else {
            return warningEl.textContent = "Password length must be a minimum of 10 and a maximum of 24 characters"
    }       
}

function generatePwTwo() {
    secondPwEl.textContent = ""
    var x = document.getElementById("pwLenght").value
    var symbolsList = document.getElementById("symbols")
    var numbersList = document.getElementById("numbers");
    
    if (symbolsList.checked == true && numbersList.checked == true && x <= maximumLenght && x >= minimumLenght) {
            for (let i=0; i < x; i++) {
            randomCharacter = Math.floor( Math.random() * characters.length )
            secondPwEl.textContent += characters[randomCharacter]
            warningEl.textContent = ""     
            }
    } else if (symbolsList.checked == false && numbersList.checked == true && x <= maximumLenght && x >= minimumLenght) {
            for (let i=0; i < x; i++) {
            randomCharacter = Math.floor( Math.random() * charactersWithoutSymbols.length )
            secondPwEl.textContent += charactersWithoutSymbols[randomCharacter]
            warningEl.textContent = ""     
            }  
    } else if (symbolsList.checked == true && numbersList.checked == false && x <= maximumLenght && x >= minimumLenght) {
            for (let i=0; i < x; i++) {
            randomCharacter = Math.floor( Math.random() * charactersWithoutNumbers.length )
            secondPwEl.textContent += charactersWithoutNumbers[randomCharacter]
            warningEl.textContent = ""     
            }
    } else if (symbolsList.checked == false && numbersList.checked == false && x <= maximumLenght && x >= minimumLenght) {
            for (let i=0; i < x; i++) {
            randomCharacter = Math.floor( Math.random() * charactersWithoutSymbolsAndNumbers.length )
            secondPwEl.textContent += charactersWithoutSymbolsAndNumbers[randomCharacter]
            warningEl.textContent = ""     
            }
    } else {
            return warningEl.textContent = "Password length must be a minimum of 10 and a maximum of 24 characters"
    }       
}

function note() {
    noteEl.textContent = "Click to Copy"
}


