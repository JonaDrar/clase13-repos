// const moment = require('moment');
import moment from 'moment';

// const chalk = require('chalk');
import chalk from 'chalk';

// const _ = require('lodash')
import _ from 'lodash';

const fechaActual = moment().format('DD-MM-YYYY HH:mm:ss');

const mensajeHora = chalk.green(`La fecha y hora actual es: ${fechaActual}`);

console.log(mensajeHora);

const numeros = [10, 5, 9, 23, 16]
const maximo = _.max(numeros);
const minimo = _.min(numeros);

console.log(chalk.yellow(`El número máximo es: ${maximo}`));
console.log(chalk.bgRed(`El número mínimo es: ${minimo}`));