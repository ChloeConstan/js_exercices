//Prompt qui demande à l'utilisateur de saisir un nombre entre 0 et 10
let number = parseInt(prompt("Choisissez un nombre entre 0 et 10 !"));

// Condition qui vérifie la réponse de l'utilisateur
if (number >= 0 && number <= 10) {
    // Boucle qui affiche les calculs du nombre multiplier par 2 jusqu'au nombre choisi par l'utilisateur
     for (let i = 1; i <= number; i++) {
        let result = i * 2;
        console.log(i + "->" + result);
    }  
} else {
   alert("Vous êtes trop gourmand monsieur !") 
}