let nb = 5;

if( nb > 10 ){
    document.write("nb est supérieur à 10<br>");
}

document.write("code suivant la structure IF<br>");

if(nb < 10 ) {
    document.write("<p>nb est inférieur à 10?</p>");
}
document.write("code suivant la structure IF ELSE")

if(nb < 10 ) {
    document.write("<p> Vous n'avez pas la moyenne :recalé(e)</p>");
}

document.write("code suivant la structure IF ELSE <br>");

if( nb < 10 ){
    document.write("<p>Vous n'avez pas la moyenne : recalé(e)</p>");
}else if(nb > 10 ){
    document.write("<p>Vous avez plus que la moyenne : mention</p>");
}else{
    document.write("<p>Vous avez pile la moyenne :rattrapage/p>");
}

if(5=="5") {
    document.write("le numérique est égale à la chaine");
}else{
    document.write("le numérique est différent de la chaine");
}
document.write("<hr>");

if("avion" > "voiture") {
    document.write("c'est mieux pour les petits trajets");
}
document.write("<hr>");

let n =5 - "sdfqsf";
/* isNan est une fonction qui est vrai si n vaut not*/


// IDENTIFIANT == admin et mdp == 12345

if(identifiant == "admin") {
    if (mdp == "12345") {
        document.write("Barvo, vous etes connecté<br>");
        
    }else{
        document.write("Le mot de passe ,ne correspond pas<br>");
    }
   
}else{
    document.write("cet identifiant n'existe pas <br>")
}
//switch

let jour = prompt("Quel jour sommee-nous?");
switch(jour){
    case
}

let jour = prompt("Quel jour sommes-nous ?");
switch(jour) {
    case "lundi": 
        document.write("c'est dur de se lever");
        break;

    case "mercredi": case "jeudi":
        document.write("milieu de semaine, courage !");
        break;

    case "vendredi":
        document.write("dernière journée de travail");
        break;
    
    case "mardi":
        document.write("c'est encore plus dur de se lever");
        break;

    default:
        document.write("WEEK-END !!!!!");
}
