
const userName = prompt("Inserisci il tuo nome")

console.log (userName);

const userSurname = prompt("Inserisci il tuo cognome")

console.log (userSurname);

const userColor = prompt("Inserisci il tuo colore preferito")

console.log (userColor);

const userNumber = prompt("inserisci il tuo numero preferito")

console.log (userNumber);

const nameElement = document.getElementById('name')
console.log(nameElement)

/* nameElement.innerHTML=`Ciao ${userName} ${userSurname} il cui colore preferito è ${userColor} il cui numero preferito è ${userNumber}` */

nameElement.innerHTML=`${userName}${userSurname}${userColor}${userNumber}`