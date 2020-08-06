console.log('hola mundo');
const arrEnt = (arr, ent) => {
    let result = arr.filter(ele => ele === ent);
    let numberTimes = result.length;
    return numberTimes;
};

let res = arrEnt([1, 2, 2, 3], 2);
console.log(res);