
// const {sumar, restar, multiplicar, dividir, promedio} = require('./operacionesMatematicas');

import {sumar, restar, multiplicar, dividir, promedio} from './operacionesMatematicas.js';


const sum = sumar(2, 2);
const res = restar(2, 2);
const mul = multiplicar(2, 2);
const div = dividir(2, 2);
const notas = [2, 4, 6 ,8];
const pro = promedio(notas);

console.log(sum);
console.log(res);
console.log(mul);
console.log(div);
console.log(pro);


// const {saludar, prologo1, prologo2, prologo3, prologo4} = require('./mensajes');
import {saludar, prologo1, prologo2, prologo3, prologo4} from './mensajes.js';

console.log(saludar ('Alexis'));
console.log(prologo1 (sum));
console.log(prologo2 (res));
console.log(prologo3 (mul));
console.log(prologo4 (div));


