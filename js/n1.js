var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var a = parseInt(lines.shift())
var b = parseInt(lines.shift())

result = a + b
console.log( "SOMA = " + result)



var input = require('fs').readFileSync('stdin', 'utf8');
var [nota1, nota2, somaNotas, media] = input.split(' ').map(item => parseFloat(item));

nota1 = 3.5 * 5.0
nota2 = 7.5 * 7.1

somaNotas = nota1 + nota2
somaPeso = 3.5 + 7.5

media = somaNotas / somaPeso

console.log("Media = " + media)