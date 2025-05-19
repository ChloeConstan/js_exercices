// Variable pour stocker l'âge de l'utilisateur
let age = prompt("Quel est votre âge ?");

// Condition pour réagir en fonction de l'âge de l'utilisateur
if (age < 18) {
    alert("Vous êtes mineur");
}
else if (age === 18 || age < 21) {
    alert("Hey ! Vous êtes majeur !");
}
else {
    alert("Bravo, vous êtes majeur à l'international !");
};