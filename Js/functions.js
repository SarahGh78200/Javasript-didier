function ecrireLigne(texte){
    document.write(texte + "<br>");
}

function ecrire(texte) {
    document.write(texte);
}

function addition(nb1,nb2){
    //return parseFloat( nb1) + parseFloat(nb2);
    return Number (nb1) + Number(nb2)
    //console.log("instruction après le 'return' ne sera jamais exécutée );
}



function superieur(a, b) {
    if(a > b) {
        return true;
    } else {
        return false;
    }
}

function plusGrand 