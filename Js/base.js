// alertr "js dans le fichier base.js");
alert ("js dans le fichier base.js");
console.log("affichage de la console ")
document.write("Bonjour didier ; Bienvenue ai Poless");
/*VARIABLE / est un espace mémoire qui va permettre de stocker une valeur pour la réutiliser si bespoin.
Cette valeu ^peut chan,ger , d'ou le nom 'variable'.*/

// DECLARATION 
let prenom; //Déclaration d'una variable 
var nombre; //Déclaration avec le mot-clé 'var'

// let prenom;
var nombre;

// AFFECTATION : donner une valeurv à une variable
prenom ="Didier"; 
nombre = "ceci est du texte parce que le nom de la variable ne change pas sa valeur";

// Déclaration - affectation
let jour = "lundi";

document.write("<h2> Nous sommes le");
document.write(jour);
document.write("</h2>");

/*EXPRESSION: en programation, une expression est tout ce qui a une valeur.Donc:
- une variable est une expression 
-5 est une expression 
- 2 * 3 est une expression ( qui vaut 6) 
Une expression a un type ; mes ma,gages de ^rogramattion ne gère pas les texteset les valeurs numériques de la meme façon.
*/

/*Types : les tyles simples ( ou primitif ou scalaire) sont les suivants:
-string : chaine de caractère (délimité par des"guilements ou des '' apostrophes)
-number : nmérique , soit un nombre entier soit un nombre réél 
-boolean : booléen. C'est un type qui ne peut avoir que 2 valeurs : true ( vrai) et false (=faux)
*/
prenom ="Fred";  //type string
nombre = 5.2;    //type number 
let vf = true    //type boolean

/*pour connaitre le type d'une expression, on peut utiliser l'opértateur typeof */
console.log("prenom",prenom,typeof prenom);
console.log("nombre",nombre,typeof nombre);
console.log("vf",vf, typeof vf );

let nombre2 = "5.2";

document.write("la variable nombre2 est de type");
document.write(typeof nombre2);
document.write ("et vaut");
document.write(nombre2);
document.write("br");

/*OPERATEURS ARITHETIQUES */ 
nombre = 2 + 3;
nombre = 2 - 3;
nombre = 2 * 3;
nombre = 2 / 3;

console.log(nombre);
nombre = nombre * 3;
console.log(nombre);

/* OPERATEUR CONCATENATION : coller un string derrière un autre string
    opérateur : +
*/

prenom = "Di" + "dier";
console.log(prenom);

document.write("Bonjour" + prenom +", bienvenue au Pole S <br>");
/* Si vous faites un calcul qui ne peut pas donner un résultat numérique , Nan = Not A number*/

nombre = 5;
nombre2 = nombre - "2"; 
console.log ("nombre2" , typeof nombre2, nombre2);

prenom = "100";

nombre2 = prenom * nombre ;
console.log(nombre2, nombre);

nombre2 = prenom + nombre;

nombre2 = parseInt(prenom) = nombre;
console.log("nombre2 après parseInt", nombre2);

//
prenom = "100,5";
nombre2 = prenom * nombre ;
console.log("nombre2", nombre2);

prenom = "100,5";
nombre2 = prenom * nombre ;
console.log("2.nombre2", nombre2);

prenom = "100,5";
nombre2 = prenom * nombre ;
console.log("3.nombre2", nombre2);


/*
NOMMAGE DES VARIABLES 
. ont peut utiliser 
• le nom d'une variable ne peut 


CONVENTION 4 accord entre développeur pour le monage des variable ; ce ne sont pas des règles , donc pas obligatoire */