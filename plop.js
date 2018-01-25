/*
Classe personne
*/
function Personne (nom, prenom){
	var that = this; /* on recopie this pour créer une indépendance de l'objet appelant*/
	this.nom = nom;
	this.prenom = prenom;
	this.bonjour = function(){
		alert("bonjour " + this.prenom);
	};	
	this.aurevoir = function(message){
		alert(message + " " + this.nom + " " + this.prenom);
	};
};

callWithAnonymeFunction = function(){
	var p = new Personne("brillant","alexandre");
	setTimeout(
		function(){
			p.bonjour();
		}, 500);
};

callWithBind = function(){
	var p = new Personne("brillant","alexandre");
	setTimeout(p.bonjour.bind(p), 500);	
};

callWithBindAndParameters = function(){
	var p = new Personne("brillant","alexandre");
	setTimeout(p.bonjour.bind2(p), 1000);
	setTimeout(p.aurevoir.bind2(p, "au revoir"), 1000);
};

Function.prototype.bind2 = function(contexte){
	var myfunction = this;
	var myarguments = [];
	for(var i = 1; i < arguments.length; i++)
	{
		myarguments.push(arguments[i]);
	}
	return function(){
			myfunction.apply(contexte, myarguments);
	}	
}

Function.prototype.bind = function(contexte){
	var myfunction = this;
	return function(){
		myfunction.apply(contexte, arguments);
	};
};