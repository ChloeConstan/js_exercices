// Variables avec les prompts pour les entrées numériques de l'utilisateur
let numberOne = parseInt(prompt("Entrez un nombre :"));
let numberTwo = parseInt(prompt("Entrez un deuxième nombre :"));
let numberThree = parseInt(prompt("Entrez un dernier nombre :"));

//Condition pour vérifier les entrées numériques
if (numberOne === numberTwo && numberTwo === numberThree) {
  alert("Les trois variables sont identiques.");
}
else if(numberOne === numberTwo || numberTwo === numberThree || numberOne === numberThree) {
  alert("Deux des trois variables sont de valeurs égales.");
}
else {
    alert("Les trois variables sont différentes.");
}