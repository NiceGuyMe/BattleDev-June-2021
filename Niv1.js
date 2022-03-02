const prompt = require('prompt-sync')();
// input
var D = +prompt(`enter the propellant weight required for take-off in kg.`)
var L = +prompt('enter the total distance of the trip in AU')
//output
const Calcul = () => (D + L * 5);
console.log("--------------------------------------------");
console.log(`the total mass for the journey is${Calcul()} kg`);
console.log("--------------------------------------------");
