function Personne(nom, prenom)
{
	var that = this;
	this.nom = nom;
	this.prenom = prenom;
	this.bonjour = function()
	{
		alert("bonjour " + that.nom + that.prenom);
	};
};

var p = new Personne("boby", "Truck");

setTimeout(
function()
{
	p.bonjour()
}, 1000);