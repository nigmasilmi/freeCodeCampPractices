
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
    let otherArgs = Array.from(arguments).splice(1);
    let arrToOutput = [].concat(arr);
    arr.filter(each => {
        for (let i = 0; i < otherArgs.length; i++) {
            if (each === otherArgs[i]) {
                arrToOutput.splice(arrToOutput.indexOf(each), 1);
                console.log(arrToOutput);

            }

        }
    });
    return arrToOutput;

}

// let mines = destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
// console.log(mines);

// Intermediate Algorithm Scripting: Wherefore art thou

function whatIsInAName(collection, source) {
    var arr = [];
    let numOfPropInterest = 0;
    let theChosenOnes = [];
    for (let property in source) {
        numOfPropInterest = numOfPropInterest + 1;
    }
    for (let item in collection) {
        let propsInEachItem = 0;
        for (let prop in collection[item]) {
            propsInEachItem = propsInEachItem + 1;

        }
        if (propsInEachItem >= numOfPropInterest) {
            theChosenOnes.push(collection[item]);
        }
    }
    let temporary = theChosenOnes.filter(ele => {
        let numberOfRights = 0;
        for (let element in source) {
            if (ele.hasOwnProperty(element)) {
                if (ele[element] == source[element]) {
                    numberOfRights = numberOfRights + 1;
                    if (numberOfRights == numOfPropInterest) {
                        return true;
                    }
                }
            }
        }
    });

    arr = temporary;
    return arr;
}

// let what = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });

// console.log(what);

// Intermediate Algorithm Scripting: Spinal Tap Case

function spinalCase(str) {

    let spacesRegex = /\s|_/g;
    let uppersRegex = /[A-Z]/g;


    let areThereSpaces = [];
    areThereSpaces = str.match(spacesRegex);
    if (areThereSpaces && areThereSpaces.length > 0) {
        str = str.replace(spacesRegex, '-');
    }

    let ele = finalReplace(str);

    function finalReplace(str) {
        function makeTheChange(match, offset, stringg) {
            if (offset === 0 || stringg[offset - 1] == '-') {
                return match.toLowerCase();
            } else {
                return `-${match.toLowerCase()}`;
            }
        }
        return str.replace(uppersRegex, makeTheChange);
    }
    str = ele;
    return str;
}

// let theCase3 = spinalCase('Teletubbies say Eh-oh');
// console.log('theCase3', theCase3);