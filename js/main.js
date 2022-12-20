// # Les conditions - Exercice 1


// 1. Via un console.log() vérifie l'egalité entre 1 et "1"
console.log(1=='1');


// 2. Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"

console.log(1==='1');

// 3. Créer un programme qui demande le prénom d'une personne,
//  si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

let nom = "laur";

if (nom.length < 5) {
  console.log("trop court");
} else {
  console.log("c'est ok ");
}

// 4. Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.
let reponse = prompt("1+4=");

if (reponse == 5) {
    console.log("bravo");
  } else {
    console.log("faux ");
  }
// 5. Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"


let correctAnswer = 4;
let multiplication = prompt("2X2=");

if (multiplication == correctAnswer) {
    console.log("la réponse était bien 4");
} else {
    console.log("la réponse était incorrecte. La différence est de " + (correctAnswer - multiplication));
}


// 6. Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau


let monTableau = [];

while (monTableau.length < 3) {
  let element = prompt("entrez un truc:");
  monTableau.push(element);
}

console.log("3 elements atteint");

// 7. Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs


let monTableau1 = [];

let monTableau2 = [];

let monTableau3 = [];

for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt("Enter a number:"));
    if (number < 12) {
      monTableau1.push(number);
    } else {
      monTableau2.push(number);
    }
  }
  
  monTableau3 = monTableau1.concat(monTableau2);

  console.log(monTableau1);
  console.log(monTableau2);
  console.log(monTableau3);

// 8. Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions


console.log(chiffreup(5, 442));

function chiffreup(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  console.log(chiffreup);