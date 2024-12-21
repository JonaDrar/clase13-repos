// const prompt = require('prompt-sync')()
import promptSync from 'prompt-sync';
const prompt = promptSync();

// const chalk = require('chalk');
import chalk from 'chalk';

// const nombre = prompt('Ingrese su nombre: ');
const fechaNacimiento = prompt('fecha de nacimiento (en formato YYYY-MM-DD): ')
// const ciudad = prompt('Ciudad de nacimiento: ')

const cantidadDeAniosBisiestosEntre = (anio1, anio2) => {
  // si el año es divisible por 4, es bisiesto
  // si el año es divisible por 100, no es bisiesto
  // si el año es divisible por 100 y por 400, es bisiesto

  let cantidadDeAnios = 0;

  for (let i = anio1; i <= anio2; i++) {
    if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
      cantidadDeAnios = cantidadDeAnios + 1;
    }
  }

  return cantidadDeAnios;
}

const calcularEdad = (fecha) => { //1994-01-01
  const fechaActual = new Date(); // 2024-12-21T15:31:21.661Z
  const fechaNacimiento = new Date(fecha); // 1994-01-01T00:00:00.000Z

  const resta = fechaActual - fechaNacimiento; // resultado en milisegundos

  const edad = resta / (1000*60*60*24*365); // resultado en años

  const edadRedondeadaHaciaAbajo = Math.floor(edad);

  const aniosEnBisiestos = cantidadDeAniosBisiestosEntre(fechaNacimiento.getFullYear(), fechaActual.getFullYear());

  console.log(chalk.blue(`Tu edad real es: ${edadRedondeadaHaciaAbajo}`));
  console.log(chalk.bgYellow(`Tu edad en años perro es: ${edadRedondeadaHaciaAbajo * 7}`));
  console.log(chalk.bgGreen(`Tu edad en años bisiestos desde que naciste es: ${aniosEnBisiestos}`));
  
}



calcularEdad(fechaNacimiento)