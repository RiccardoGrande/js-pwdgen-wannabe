
const userName = prompt("Inserisci il tuo nome")

console.log (userName);

const userSurname = prompt("Inserisci il tuo cognome")

console.log (userSurname);

const userColor = prompt("Inserisci il tuo colore preferito")

console.log (userColor);


const nameElement = document.getElementById('name')
console.log(nameElement)

nameElement.innerHTML=`Ciao ${userName} ${userSurname} il cui colore preferito è ${userColor} 23`