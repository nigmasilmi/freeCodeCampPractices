
// Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed

function sumAll(arr) {
    let sorted = arr.sort((a, b) => { return a - b; });
    let begin = sorted[0];
    let end = sorted[1];
    let arrToSum = [];
    for (let i = begin; i <= end; i++) {
        arrToSum.push(i);
    }
    let aim = arrToSum.reduce((sum, ele) => sum + ele, 0);
    return aim;
}

let res1 = sumAll([5, 10]);
// console.log(res1);

// Intermediate Algorithm Scripting: Diff Two Arrays

function diffArray(arr1, arr2) {
    var newArr = [];
    let tempArr1 = arr1.filter(x => !arr2.includes(x));
    let tempArr2 = arr2.filter(x => !arr1.includes(x));

    newArr = tempArr2.concat(tempArr1);

    return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



let res2 = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//should return ["diorite", "pink wool"].
// console.log('res2', res2);

// Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr) {
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
