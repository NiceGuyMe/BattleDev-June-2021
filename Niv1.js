const prompt = require('prompt-sync')();
// input
var D = +prompt(`saisir la masse d’ergol nécessaire au décollage en kg.`)
var L = +prompt('saisir la distance total du voyage en UA')
//output
const Calcul = () => (D + L * 5);
console.log("--------------------------------------------");
console.log(`la masse total pour le voyage est ${Calcul()} kg`);
console.log("--------------------------------------------");