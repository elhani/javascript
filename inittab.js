//init tableau  utiliser instanceof pour conformer aue est un tableau

var entries = new Array ('trains','plains','automobile');
console.log(entries instanceof Array);

//init tableau avec des varibles de type defferent ...méme resultat
//true
var entries = new Array ('trains','42',true);
console.log(entries instanceof Array);

//affichage index  2
var entries = ['trains','plains','automobile'];
console.log( entries[2]);

// affichage index 4

var entries = ['trains','plains','automobile'];
console.log( entries[4]);

// longeur tableau 
var entries = new Array (5);
console.log(entries.length);

//longeur tableau 
var entries = new Array ('5');
console.log(entries.length);

//longeur tableau
var entries = [] ;
console.log(entries.length);

// tostring affichage tout ls variable 
var entries = ['trains','plains','automobile'];
console.log(entries.toString());

// fonction valueof  pour afficher l'accolade et sa contenue

var ratings =[5,2,4];
console.log(ratings.valueOf());

// fonction join 
var ratings =[5,2,4];
console.log(ratings.join('|')); 

// fonction push

var ratings =[];
ratings.push(5);
ratings.push(2,4);
console.log(ratings.length);


//fonction pop  dernier valeur ajouter 

var ratings =[];
ratings.push(5);
ratings.push(2,4);
console.log(ratings.pop());

// fonction shift   donner lq premier valeur


var ratings = [];
ratings.push(5);
ratings.push(2,4);

var firstratings = ratings.shift();
console.log(firstratings);










