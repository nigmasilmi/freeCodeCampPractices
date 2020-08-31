
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

//Intermediate Algorithm Scripting: Pig Latin

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let consArr = str.match(consonantRegex);
    return consArr !== null ? str
        .replace(consonantRegex, "")
        .concat(consArr)
        .concat("ay")
        : str.concat("way");
}

// let thePig = translatePigLatin("glove"); // should return "oveglay".
// console.log(thePig);

// Intermediate Algorithm Scripting: Search and Replace

function myReplace(str, before, after) {
    let regexi = /^[A-Za-z]/;
    let isItUpper = /^[A-Z]/;
    let wordUpper = after.replace(regexi, function (match) { return match.toUpperCase(); });
    let wordLower = after.replace(regexi, function (match) { return match.toLowerCase(); });

    return before.match(isItUpper) !== null ? str.replace(before, wordUpper) : str.replace(before, wordLower);

}

// let theReplacement = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// console.log(theReplacement);

// Intermediate Algorithm Scripting: DNA Pairing

function pairElement(str) {
    let dna = [];
    let codons = str.match(/[A-Z]/g);
    codons.forEach(element => dna.push([element]));
    dna.forEach(element => {
        if (element[0] == 'C') {
            element.push('G');
        }
        if (element[0] == 'G') {
            element.push('C');
        }
        if (element[0] == 'T') {
            element.push('A');
        }
        if (element[0] == 'A') {
            element.push('T');
        }
    });
    str = dna;
    return str;
}

// let theRCP = pairElement("GCG");
// console.log(theRCP);

// Intermediate Algorithm Scripting: Missing letters

function fearNotLetter(str) {
    let asciiArr = [];
    let theMissing = [];
    for (let i = 0; i < str.length; i++) {
        asciiArr.push(str.charCodeAt(i));
    }
    for (let i = 0; i < asciiArr.length; i++) {
        let isChar = asciiArr[i];
        let elemMustBe = isChar + 1;
        console.log(i, asciiArr[i], elemMustBe);
        if (i != asciiArr.length - 1) {
            if (asciiArr[i + 1] != elemMustBe) {
                theMissing.push(String.fromCharCode(elemMustBe));
            }
        }

    }

    if (theMissing.length > 0) {
        str = theMissing.join('');

    } else {
        str = undefined;
    }
    return str;


}

// let theMissings = fearNotLetter("abcdefghijklmnopqrstuvwxyz");
// console.log(theMissings);

// Intermediate Algorithm Scripting: Sorted Union

function uniteUnique(arr) {
    let finalArr = [];
    for (let prop in arguments) {

        arguments[prop].forEach((element) => {
            if (finalArr.indexOf(element) == -1) {
                finalArr.push(element);
            }
        });

    }
    arr = finalArr;
    return arr;
}

// let theUnique = uniteUnique([1, 2, 3], [5, 2, 1]);
// console.log('theUnique', theUnique);

// Intermediate Algorithm Scripting: Convert HTML Entities

function convertHTML(str) {
    const regex = /[&><'"]/g;
    let replaceDict = {
        "&": '&amp;',
        ">": '&gt;',
        "<": '&lt;',
        "'": '&apos;',
        "\"": '&quot;',

    };
    console.log(str.match(regex));
    let replaced = str.replace(regex, function (match, index, string) {
        return replaceDict[match];
    });


    str = replaced;
    return str;
}

// convertHTML('Stuff in "quotation marks"');



// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

function sumFibs(num) {
    let finalArr = [];
    let numToAdd = 1;
    let accumulator = 0;

    for (let i = 0; i < num; i++) {
        if (i === 0 || i === 1) {
            finalArr.push(numToAdd);
            accumulator = accumulator + numToAdd;
        } else {
            numToAdd = Number(finalArr[i - 1]) + Number(finalArr[i - 2]);
            finalArr.push(numToAdd);

            if (numToAdd % 2 !== 0) {
                if (numToAdd <= num) {
                    accumulator = accumulator + numToAdd;

                }

            }

        }
    }

    return accumulator;

}

// let theFibbo = sumFibs(4000000);
// console.log(theFibbo);

// Intermediate Algorithm Scripting: Sum All Primes

function sumPrimes(num) {
    let primeAccumulator = 0;
    let theCheckingArr = [];
    for (let i = 2; i <= num; i++) {
        if (checkThePrimes(i)) {
            theCheckingArr.push(i);
            primeAccumulator += i;
        }
    }
    function checkThePrimes(n) {

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;

    }

    return primeAccumulator;
}

// let theOnes = sumPrimes(977);
// console.log(theOnes);

// Intermediate Algorithm Scripting: Smallest Common Multiple

function smallestCommonsPriming(arr) {
    let start = arr.sort((a, b) => a - b)[0];
    let end = arr.sort((a, b) => a - b)[1];
    let theNums = generateArr(start, end);

    function priming(elem) {
        let primes = {
            "2": 0,
            "3": 0,
            "5": 0,
        };
        if (elem % 2 === 0) {
            while (elem % 2 === 0) {
                primes['2']++;
                elem = elem / 2;
            }
            while (elem % 3 === 0) {
                primes['3']++;
                elem = elem / 3;
            }
            while (elem % 5 === 0) {
                primes['5']++;
                elem = elem / 5;
            }
        }
        return primes;
    }

    let theCommonsHigh = {};
    let primeStart = priming(start);
    let primeEnd = priming(end);
    for (let prop in primeStart) {
        if (primeStart[prop] > primeEnd[prop]) {
            theCommonsHigh[prop] = primeStart[prop];
        }
        if (primeStart[prop] == primeEnd[prop]) {
            theCommonsHigh[prop] = primeStart[prop];

        }
        if (primeStart[prop] < primeEnd[prop]) {
            theCommonsHigh[prop] = primeEnd[prop];

        }

    }
    console.log('commons', theCommonsHigh);

    let theMultiple = 1;
    for (let pr in theCommonsHigh) {
        theMultiple = theMultiple * Math.pow(Number(pr), theCommonsHigh[pr]);
    }
    console.log(theMultiple);
    function generateArr(start, end) {
        let theArr = [];
        for (let i = start; i < end + 1; i++) {
            theArr.push(i);
        }
        return theArr;
    }

    return arr;
}


// let theSmallest = smallestCommonsPriming([2, 10]);
// console.log('the smallest', theSmallest);


// NOT ACHIEVED
function smallestCommons(arr) {
    // crear un array con los números entre el mayor y el menor, con el mayor de primero
    let freshArr = [];
    // arr.sort((a, b) => { return b - a; });
    arr.sort((a, b) => { return b - a; });
    for (let i = arr[0]; i >= arr[1]; i--) {
        freshArr.push(i);
    }
    // obtener el número mayor entre el menor
    console.log(freshArr);
    let maxVal = freshArr[0];
    let quot;
    quot = freshArr[freshArr.length - 1] % freshArr[0];
    console.log(quot);

    return arr;
}


// smallestCommons([1, 5]);

// Intermediate Algorithm Scripting: Drop it

function dropElements(arr, func) {
    let newArr = arr;
    let trueOrFalse = newArr.map(ele => func(ele));
    var numberOFalses = arr.length;

    for (let i = 0; i < newArr.length; i++) {
        if (trueOrFalse[i] === true) {
            numberOFalses--;
            newArr = newArr.slice(i);
            // return numberOFalses;
            break;
        }
    }
    console.log('number of falses', numberOFalses);
    if (numberOFalses < arr.length) {
        arr = newArr;
        return arr;
    } else { return []; }

}
// console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));
// console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));



// Intermediate Algorithm Scripting: Steamroller

function steamrollArray(arr) {
    let pancake = [];
    function pancakeIt(element) {
        if (!Array.isArray(element)) {
            pancake.push(element);
            console.log('pancake', pancake);
        } else {
            for (let item in element) {
                pancakeIt(element[item]);
            }
        }
    }

    arr.forEach(element => pancakeIt(element));
    return pancake;
}

// let aplana = steamrollArray([1, [], [3, [[4]]]]); //should return [1, {}, 3, 4]
// console.log(aplana);

// Intermediate Algorithm Scripting: Binary Agents

function binaryAgent(str) {
    let outputstr = '';
    let binArr = str.split(' ');
    console.log('binArr', binArr);
    for (let i = 0; i < binArr.length; i++) {
        outputstr += String.fromCharCode(parseInt(binArr[i], 2));
    }
    return outputstr;
}

// let bin = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// console.log('bin', bin);

// Intermediate Algorithm Scripting: Everything Be True

function truthCheck(collection, pre) {
    let theyPass = [];
    collection.forEach(element => {
        console.log(element[pre]);
        if (element.hasOwnProperty(pre) && Boolean(element[pre])) {
            theyPass.push(1);
        } else {
            theyPass.pop();
        }
    });
    if (theyPass.length === collection.length) {
        return true;
    } else {
        return false;
    }
}

// let theTruth = truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
// console.log(theTruth);

// Intermediate Algorithm Scripting: Arguments Optional

function addTogether() {
    console.log(arguments);
    if (typeof (arguments[0]) === 'number') {
        let theOnly = arguments[0];
        if (arguments[1]) {
            if (typeof (arguments[1]) === 'number') {
                return arguments[0] + arguments[1];
            } else {
                return undefined;
            }
        } else {
            return function theHelper(theOther) {
                if (typeof (theOther) !== 'number') {
                    return undefined;
                } else {
                    return theOnly + theOther;
                }

            };
        }

    } else {
        return undefined;
    }

}

// let together = addTogether(3);
// console.log(together);

// console.log(together(3));

// Intermediate Algorithm Scripting: Make a Person

var Person = function (firstAndLast) {
    let fullName = firstAndLast;
    this.getFullName = function () {
        return fullName;
    };
    this.getFirstName = function () {
        return fullName.split(' ')[0];
    };
    this.getLastName = function () {
        return fullName.split(' ')[1];
    };

    this.setFirstName = function (first) {
        fullName = first + " " + fullName.split(" ")[1];
    };

    this.setLastName = function (last) {
        fullName = fullName.split(" ")[0] + " " + last;
    };

    this.setFullName = function (full) {
        fullName = full;
    };

    return firstAndLast;
};

// var bob = new Person('Bob Ross');
// var has = new Person('Haskell Curry');
// let test = bob.getFullName();
// let test2 = has.getFirstName();
// let obj = Object.keys(bob);
// console.log(obj);
// console.log(test);
// console.log(test2);

// Intermediate Algorithm Scripting: Map the Debris

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let newArr = [];

    arr.forEach(element => {
        let newObj = {};

        for (let property in element) {
            newObj.name = element.name;
            if (property === 'avgAlt') {
                newObj.orbitalPeriod = Math.round(Math.sqrt((4 * Math.pow(Math.PI, 2) * ((Math.pow(earthRadius + element.avgAlt, 3))) / GM)));
            }
        }
        newArr.push(newObj);

    });

    arr = newArr;
    return arr;
}

// let theCalcs = orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);
// console.log(theCalcs);