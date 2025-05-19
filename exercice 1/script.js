// Création des variables qui contiennent les informations que l'utilisateur va renseigner
let firstPerson = prompt("Veuillez entrer un premier prénom");
let secondPerson = prompt("Veuillez entrer un second prénom");
let firstState = prompt("Veuillez entrer un premier état du jour");
let secondState = prompt("Veuillez entrer un second état du jour");
let hours = prompt("Veuillez entrer une heure");
let day = prompt("Veuillez entrer un jour");

// console.log() pour afficher les variables dans la console
console.log(`${firstPerson} : Bonjour !`);
console.log(`${secondPerson}: Bonjour ${firstPerson} ! Comment vas-tu ?`);
console.log(`${firstPerson} : ${firstState}, et toi ?`);
console.log(`${secondPerson} : ${secondState}, je te remercie.`);
console.log(`${firstPerson} : Quelle heure est-il ?`);
console.log(`${secondPerson} : Il est ${hours} heures.`);
console.log(`${firstPerson} : Dacc, merci.`);
console.log(`${secondPerson} : Où manges-tu aujourd'hui ?`);
console.log(`${firstPerson} : Je rentre chez moi comme tous les ${day}s.`);
console.log(`${secondPerson} : D'acc.`);
