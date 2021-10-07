var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 
 */


var xKm = parseInt(lines.shift())
var y = lines.shift()

consumoMedio = xKm / y

console.log(consumoMedio.toFixed(3) + " km/l")