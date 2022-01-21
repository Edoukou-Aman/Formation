/*window.addEventListener('load',horloge);
function horloge(){
    let d = new Date();
    document.getElementById('heure').innerHTML = d.toLocaleTimeString();
    setTimeout(horloge, 1000);
}

document.addEventListener('DOMContentLoaded', function(){
    let cache = document.getElementById('bouton');
    cache.addEventListener('click',cacheHorloge);
    document.getElementById('tog').style.display = 'block';
    function cacheHorloge(){
        let para = document.getElementById('tog');
        if(para.style.display == 'block'){
            para.style.display = 'none';
        }else{
            para.style.display = 'block';
        }
    }
});
*/
//let x = 0;
/*while (x<5){
    //alert(x);
    document.getElementById('p1').innerHTML+='<br>'+x;
    x++;
}*/
/*
do {
    document.getElementById('p1').innerHTML+='<br>'+x;
    x++;
}while (x<5)
*/
/*
for (let x=0;x<10;x++) {
    if(!(x % 2) != 0) {
        continue;
    }
    document.getElementById('p1').innerHTML+='<br>'+x;

}

let x = "Hello guys";
let x2 = x.replace('guys', 'everybody');
document.getElementById('p1').innerHTML+='<br>'+x2;


function aleatoire() {
    return Math.trunc(Math.random()*10);
}

function som(a,b) {
    return a +' + '+b+' + '+' = '+ (a+b);
}

document.getElementById('p1').innerHTML+='<br>'+aleatoire();
document.getElementById('p2').innerHTML+='<br>'+som(3,8);


// Fonction anonyme auto-invoquée
(function () {
    alert('Test')
})();

// Fonction nommée auto-invoquée
(function hello(){alert('hello !')})();



let pa1 = document.getElementById('pa1');
let pa2 = document.getElementById('pa2');

pa1.addEventListener('click',function (){
    alert('Test 1');
});

pa2.addEventListener('click',function (){
    alert('Test 2');
});


// recursive
function decpt(t) {
    if (t>0) {
        document.getElementById('p1').innerHTML+= t + '<br>';
        return decpt(t-1);
    } else {
        return t
    }
};

decpt(9);

 */

//OBJET

/*
let user = {
    name : ['Kevin', 'Aman'],
    age  : 22,
    email : 'keke@gmail.com',
    password : 'user&21',

    salut : function () {
        alert('Bonjour, je suis '+ this.name[0]+', j\'ai '+ this.age+ ' ans');
    }
};
document.getElementById('p1').innerHTML+= 'Mon âge : ' + user.age;
user.age = 20;
document.getElementById('p2').innerHTML+= 'Nouvel âge : ' + user.age;
//user.salut();

user.taille = 170;
user.ajoutTaille = function () {
    alert('Bonjour, je suis '+ this.name[0]+', j\'ai '+ this.age+ ' ans et je mesure '+this.taille+ ' cm');
}

user.ajoutTaille();


document.getElementById('p1').innerHTML+= 'Mon nom : ' + user['name'];



var moi = {
    prenom : "Kevin",
    nom : "Aman",
    age : 22,

    identite : function (){
        return 'Prénom : '+ this.prenom+
                '\nnom :'  + this.nom+
                '\nage : ' + this.age;
    }
}

alert(moi.identite());

// CONSTRUCTEUR

function User(n,a,e) {
    this.name = n;
    this.age = a;
    this.email = e;
    this.salut = function () {
        alert('Bonjour, je suis '+ this.name[0]+', j\'ai '+ this.age+ ' ans');
}
}

let Keke = new User(['Keke','Aman'],22,'keke@gmail.com');
Keke.taille = 170;
Keke.salut();
document.getElementById('p1').innerHTML+= 'Taille  : ' + Keke['taille'];

console.log(User.prototype);
 */

// CLASSES
/*
class Ligne {
    constructor(nom, longueur) {
        this.nom = nom;
        this.longueur = longueur;
    }

    taille() {document.getElementById('p1').innerHTML+= 'Longueur de '+this.nom +' : '+this.longueur+'<br><br>'};
}

let geo1 = new Ligne('geo1',10);
let geo2 = new Ligne('geo2', 5);
geo1.taille();
geo2.taille();

class Rectangle extends Ligne {
    constructor(nom,longueur,largeur) {
        super(nom,longueur);
        this.largeur = largeur;
    }
    aire(){
        document.getElementById('p2').innerHTML+= 'Aire de '+this.nom+' : '+this.longueur*this.largeur+'<br>'
    };
}
let geo3 = new Rectangle('geo3',7,5);
geo3.aire();
geo3.taille();

*/

// DOM
/*
var tab = document.getElementsByTagName('p');
alert(tab);

document.getElementById('gros_titre').innerHTML = 'Modification';
var textePara = document.querySelector('.para').textContent;


var newPara = document.createElement('p');
newPara.id ='nouveau';

// Texte a inséré
var texte = document.createTextNode('Insérer');

//Insertion dans le 'p'
newPara.appendChild(texte);

//Insertion dans le 'body'
document.body.appendChild(newPara);

// Insertion dans une zone de notre choix
// Au dessus du para1
var para1 = document.querySelector('.para');
document.body.insertBefore(newPara, para1);

// Suppression
var titre = document.getElementById('gros_titre');
var parent = document.body;

//parent.removeChild(titre);

var newTit = document.createElement('h2');
newTit.id = 'moyen';
newTit.innerHTML = 'Titre modifie en Js';

parent.replaceChild(newTit,titre);

var p = document.querySelector('.para');
var div = p.parentNode;

div.style.color = 'orange';


var b = document.body;
var div = b.childNodes[3]; //les espaces entre les balises sont comptabilisés
var p1 = b.childNodes[1];  // h1

var texte = p1.childNodes[0].nodeValue; // le contenu de h1 partant du premier elt

alert(texte);


var p2 = document.querySelectorAll('.para')[1];

var first = p2.firstChild;
var end = p2.lastChild;
var inner1 = first.nodeValue;
var inner2 = end.innerHTML;

alert(inner1+'\n '+inner2)


*/

var titre = document.getElementById('gros_titre');
var div = titre.nextSibling.nextSibling;
div.innerHTML = 'Div modifé';





// \n
