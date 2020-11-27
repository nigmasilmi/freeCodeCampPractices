const compareTriplets = (a, b) => {
    const score1 = a;
    const score2 = b;
    let scorePerson1 = 0;
    let scorePerson2 = 0;
    let scoreResult = [];

    //comparar los arrays en sus mismos índices, encontrar el mayor
    // sumar un punto al scorePerson correspondiente

    score1.map((ele, index) => {
        if (score1[index] > score2[index]) {
            scorePerson1++

        } else if (score1[index] < score2[index]) {
            scorePerson2++
        }
    });

    // el return debe ser un array con la puntuación 
    scoreResult.push(scorePerson1);
    scoreResult.push(scorePerson2);
    return scoreResult;

};
// const score1 = [12, 38, 30];
// const score2 = [99, 16, 8];
const score1 = [6, 8, 12];
const score2 = [7, 9, 15];

const test = compareTriplets(score1, score2);
console.log('result', test);