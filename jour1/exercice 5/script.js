//Script qui demande 2 information à l'utilisateur 
let number = parseInt(prompt("Veuillez entrer un nombre :"));
let evenOrOdd = prompt("Votre nombre est-il pair ou impair ?");

//Condition pour afficher si le nombre est pair ou impair
if (evenOrOdd === "pair") {
// Boucle qui affiche tous les nombre pair jusqu'au nombre choisi par l'utilisateur
    for (let i = 0; i < number; i++) {
        let result = i + 2;
        console.log(i + result);
    }
} else if (evenOrOdd === "impair") {
// Boucle qui affiche tous les nombre impair jusqu'au nombre choisi par l'utilisateur
    for (let i = 1; i < number; i++) {
        let result = i + 1 ;
        console.log(i + result);
    }
} else {
//Gestion d'erreur si l'utilisateur ne respecte pas les consignes
    alert("Vous vous êtes trompé...");
}