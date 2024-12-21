// funciones 

export const sumar = (n1, n2) => {
    return n1 + n2
};

export const restar = (n1, n2) => {
    return n1 - n2
};

export const multiplicar = (n1, n2) => {
    return n1 * n2
};

export const dividir = (n1, n2) => {
    return n1 / n2
};

export const promedio = (arregloNotas) => {
    let total = 0

    for (let i = 0; i < arregloNotas.length; i++) {
        total += arregloNotas[i];
    }
    const resultado = total / arregloNotas.length;
    return resultado;
}

//exportar

// module.exports = {
//     sumar,
//     restar,
//     multiplicar,
//     dividir,
//     promedio
// }

