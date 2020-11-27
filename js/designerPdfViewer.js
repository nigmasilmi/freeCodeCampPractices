// dado un array de alturas y una palabra
// determinar la altura del rectángulo que se genera
// al resaltar la palabra

const designerPdfViewer = (h, word) => {
    const wordArr = word.split('');
    let hArr = [];

    // para desarrollo trabajé a partir de string, ej: '1 3 4 5 6 4 2 3 ...etc'
    // por eso la validación previa:
    if (!Array.isArray(h)) {
        hArr = (h.split(' ')).map(num => Number(num));
    } else {
        hArr = h;
    }

    let letterIndexes = [];
    let letterHeights = [];

    // determinar la longitud de la palabra
    const wordLength = word.length;

    // determinar la índice de cada letra generando un objeto dinámico con códigos ascii
    // de letras minúsculas del alfabeto inglés
    let dictObj = {};
    let index = 0;
    for (let i = 97; i < 123; i++) {
        dictObj[String.fromCharCode(i)] = index;
        index++;
    };

    // encontrar el índice en el diccionario para cada letra en la palabra
    for (letter in dictObj) {
        let found = wordArr.map(char => {
            if (char === letter) {
                letterIndexes.push(dictObj[letter]);
            }
        });
    };
    // con los índices encontrados, extraer el valor de la altura para cada índice
    // y agregarlo al array de alturas

    letterIndexes.map(ele => {
        letterHeights.push(hArr[ele])
    });

    // encontrar la mayor altura de los índices encontrados
    const heighest = letterHeights.reduce((prev, act) => prev > act ? prev : act);

    // cálculo del área
    return heighest * wordLength;

}

const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
const word = 'zaba'
const test = designerPdfViewer(h, word);
console.log(test);