import { allCountries } from "./countries.js";
import { fullCountries } from "./countries_data.js";
// 💻 Ejercicios

// Ejercicios: Nivel 1

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Alfred", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Explique la diferencia entre forEach, map, filter, and reduce.
// Map y filter devuelven nuevos arrays. forEach solamente itera sobre los elementos y reduce retorna un único valor

// Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
function callback() {

}

// Utiliza forEach para mostrar con console.log cada país del array de países.
countries.forEach(e => console.log(e));

console.log('=======================================');

// Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
names.forEach(e => console.log(e));

console.log('=======================================');

// Utiliza forEach para mostrar con console.log cada número del array de números.
numbers.forEach(e => console.log(e));

console.log('=======================================');

// Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
const toUpper = countries.map(e => e.toUpperCase());
console.log(toUpper);

console.log('=======================================');

// Utilice map para crear un array de longitudes de países a partir del array de países.
const lengths = countries.map(e => `Longitud de ${e} = ${e.length}`);
console.log(lengths);

console.log('=======================================');

// Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
const expNum = numbers.map(e => `${e} al cuadrado es: ${e ** 2}`);
console.log(expNum);

console.log('=======================================');

// Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
const upperNames = names.map(e => `${e.toUpperCase()}`);
console.log(upperNames);

console.log('=======================================');

// Utilice map para asignar el array de productos a sus correspondientes precios.
const productsPrice = products.map(e => `El producto ${e.product} tiene un coste de ${e.price === '' || e.price === ' ' ? '----' : e.price} $`);
console.log(productsPrice);

console.log('=======================================');

// Utilice filter para filtrar los países que contienen land.
const countriesWithLand = countries.filter(e => e.includes('land') || e.includes('Land'));
console.log(`Los países que contienen "land" son: ${countriesWithLand.join(', ')}`);

console.log('=======================================');

// Utilice filter para filtrar los países que tienen seis caracteres.
const countriesWithSixChar = countries.filter(e => e.length === 6);
console.log(`Los países con 6 caracteres son: ${countriesWithSixChar.join(', ')}`);

console.log('=======================================');

// Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
const countriesWithMoreThanSix = countries.filter(e => e.length >= 6);
console.log(`Los países con 6 caracteres o más son: ${countriesWithMoreThanSix.join(', ')}`);

console.log('=======================================');

// Utilice filter para filtrar los países que empiezan por "E";
const countriesStartsE = countries.filter(e => e.startsWith('e') || e.startsWith('E'));
console.log(`Los países que empiezan por e o por E son: ${countriesStartsE.length !== 0 ? countriesStartsE.join(', ') : 'Ninguno empieza por e o E'}`);

console.log('=======================================');

// Utilice filter para filtrar sólo los precios con valores.
const pricesOn = products.filter(e => e.price > 0);
for(let i = 0; i < pricesOn.length; i++) {
    console.log(`${pricesOn[i].product} tiene valor.`);
}

console.log('=======================================');

// Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
const arr = ["loro", "coche", 8, 15, "parque"]
function getStringLists(arr) {
    const strArr = [];
    arr.map(e => {
        if(typeof e === 'string') {
            strArr.push(e);
        }
    });
    return strArr;
}

console.log(getStringLists(arr));

console.log('=======================================');

// Usa reduce para sumar todos los números del array de números.
const sumTot = numbers.reduce((acc, cur) => {
    return acc + cur;
}, 0)
console.log(`La suma total del array numbers es: ${sumTot}`);

console.log('=======================================');


// Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
const concatenation = countries.reduce((acc, cur) => {
    let char = '';
    char = acc + ", " + cur;
    return char;
});
console.log(concatenation);

console.log('=======================================');


// Explique la diferencia entre some y every
// Some devuelve true si alguno de los valores cumple la condición, y every solamente devuelve true si todos los elementos cumplen la condición.

console.log('=======================================');

// Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
const somehigherSeven = names.some(e => e.length > 7);
console.log(somehigherSeven === false ? `Ningún nombre tiene más de 7 caracteres` : `Alguno tiene más de 7 caracteres`);

console.log('=======================================');

// Utilice every para comprobar si todos los países contienen la palabra land.
const everyWithLand = countries.every(e => e.includes('land') || e.includes('Land'));
console.log(everyWithLand);

console.log('=======================================');

// Explique la diferencia entre find y findIndex.
// Find devuelve el valor del primer elemento que encuentre que cumpla la condición, y findIndex devulve el index del primer elemento que cumpla la condición

console.log('=======================================');

// Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
const firstCountryWithSix = countries.find(e => e.length > 6);
console.log(`El primer país que tiene más de 6 caracteres es ${firstCountryWithSix}`);

console.log('=======================================');

// Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
const onlySixCountry = countries.findIndex(e => e.length === 6);
console.log(`El país que contiene 6 letras es el del índice ${onlySixCountry}, que es ${countries[1]}`);

console.log('=======================================');

// Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.
const findNor = countries.findIndex(e => e === 'Norway');
console.log(`Buscamos Norway, y está en la posición ${findNor}`);

console.log('=======================================');

// Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.
const findRus = countries.findIndex(e => e === 'Russia');
console.log(`Buscamos Norway, y está en la posición: ${findRus === -1 ? 'No existe' : `${findRus}`}`);

console.log('=======================================');

// Ejercicios: Nivel 2

// Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
const productsWithPrices = products.filter(e => e.price > 0);
const pricesProducts = productsWithPrices.map(e => e.price);
const totalSum = pricesProducts.reduce((acc, cur) => acc + cur, 0);
console.log(`La suma total de precios es de ${totalSum} $`);

console.log('=======================================');

// Encuentre la suma del precio de los productos usando sólo reduce(callback)).
const pricesTotalReduce = products.reduce((acc, cur) => {
    if(cur.price === "" || cur.price === " ") {
        cur.price = 0;
    }
    return acc + cur.price;
}, 0);
console.log(`La suma total usando solamente Reduce es ${pricesTotalReduce}`);

console.log('=======================================');

// Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
function categorizeCountries(element) {
    const country = element.filter(e => e.toLowerCase().includes('land'));
    return country;
}

console.log(categorizeCountries(allCountries));

console.log('=======================================');

// Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.
function countryStartWith(element) {
    const country = element.filter(e => e.toLowerCase().startsWith('c'))
    return {
        country: country,
        paisesCon: country.length
    }
}

console.log(countryStartWith(allCountries));

console.log('=======================================');

// Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.
function getFirstTenCountries(element) {
    const tenCountries = element.slice(0, 10);
    const newArr = tenCountries.map(e => e);

    return newArr;
}

console.log(getFirstTenCountries(allCountries));
console.log('=======================================');


// Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.
function getLastTenCountries(element) {
    const lastTenCountries = element.slice(-10);
    const newArr = lastTenCountries.map(e => e);

    return newArr;
}

console.log(getLastTenCountries(allCountries));

console.log('=======================================');


// Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)
function getMostUsedInitial(element) {
    let countryCounts = {};

    element.forEach(element => {
        const firstLetter = element.charAt(0).toLowerCase();
        if(countryCounts[firstLetter]) {
            countryCounts[firstLetter]++;
        } else {
            countryCounts[firstLetter] = 1;
        }
    });

    const mostCommonLetter = Object.keys(countryCounts).reduce((acc, cur) => countryCounts[acc] > countryCounts[cur] ? acc : cur);


    return `La inicial que más se repite es la '${mostCommonLetter.toUpperCase()}'. Se repite ${countryCounts["s"]} veces.`;
}

console.log(getMostUsedInitial(allCountries));


console.log('=======================================');

// Ejercicios: Nivel 3

// Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre, por capital, por población
// Ordenado por nombre:
fullCountries.sort((a, b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
})

console.log(fullCountries);

// Ordenado por caputal
fullCountries.sort((a, b) => {
    if(a.capital < b.capital) return -1;
    if(a.capital > b.capital) return 1;
    return 0;
})
console.log(fullCountries);

// Ordenado por población
fullCountries.sort((a, b) => {
    if(a.population < b.population) return -1;
    if(a.population > b.population) return 1;
    return 0;
})
console.log(fullCountries);




// *** Encuentre las 10 lenguas más habladas:

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```

// *** Utilice el archivo countries_data.js para crear una función que cree los diez países más poblados.

// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```

// *** Intenta desarrollar un programa que calcule la medida de tendencia central de una muestra(mean, median, mode) y medida de la variabilidad(range, variance, standard deviation). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puede crear un objeto llamado estadísticas y crear todas las funciones que hacen cálculos estadísticos como método para el objeto estadísticas. Comprueba el resultado que aparece a continuación.

// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 3