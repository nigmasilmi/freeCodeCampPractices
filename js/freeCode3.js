// multiply the first n elements of an array to create the product of those elements

const multi = (arr) => {
    let multi = 1;
    for (let p = 0; p < arr.length; p++) {
        multi *= arr[p];
    }
    return multi;

};
let arte = [1, 2, 3];
// console.log('resultado de multi(arte): ', multi(arte));


// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
    let suma = 0;
    if (n <= 0) {
        return 1;
    } else {
        for (let y = 0; y < n; y++) {
            suma += arr[y];
        }
        //   return sum(arr, n-1)*arr[n-1];
    }
    return suma;

}

let myresult = sum([2, 3, 4, 5], 3);
// console.log('myresult: ', myresult);
//   should equal 9.

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
// function sumTwo(arr, n) {
//     let suma = 0;
//     if (n <= 0) {
//         return 0;
//     } else {
//         return sumTwo(arr, n + 1) + arr[n];
//     }
//     //   return sum(arr, n-1)*arr[n-1];

// }

// let myresulTwo = sumTwo([2, 3, 4, 5], 3);
// let myresultV = sumTwo([1], 0);
// // should equal 0.
// console.log('myresulTwo: ', myresulTwo);
// console.log('myresultV: ', myresultV);
//   should equal 9.

// Basic Algorithm Scripting: Finders Keepers

// Create a function that looks through an array (first argument) and returns 
// the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.


function findElement(arr, func) {
    let num = 0;
    for (let u = 0; u < arr.length; u++) {
        if (func(arr[u])) {
            num = arr[u];
            return num;
        }
    } if (num === 0) {
        return undefined;
    }
}

const venga = findElement([1, 2, 3, 4], num => num % 2 === 0);

// Basic Algorithm Scripting: Boo who

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    if (isNaN(bool)) {
        bool = false;
    }
    else if (bool == null || bool == undefined) {
        bool = false;
    }

    else if (typeof (bool) != "boolean") {
        bool = false;
    }
    else if (bool.toString() === "true") {
        bool = true;
    }
    else if (bool.toString() === "false") {
        bool = true;

    }
    return bool;

}


let result = booWho([1, 2, 3]);



// Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    let strArr = str.split(" ");
    let strCaps = strArr.map(element => changeTheLead(element));


    function changeTheLead(word) {
        let wordArr = word.split('');
        let frankenstein = [];
        for (let [index, val] of wordArr.entries()) {
            if (index === 0) {
                val = val.toUpperCase();
                frankenstein.push(val);

            } else {
                val = val.toLowerCase();
                frankenstein.push(val);

            }
        }
        wordArr = frankenstein.join('');
        return wordArr;
    }

    str = strCaps.join(' ');
    return str;
}

let resultCase = titleCase("I'm a LITTLE GUAREVER");



// Basic Algorithm Scripting: Slice and Splice

// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array.The input arrays should remain the same after the function runs.


function frankenSplice(arr1, arr2, n) {

    let arr2Copy = [];
    arr2.forEach(e => arr2Copy.push(e));

    let arr2Right = arr2Copy.splice(n);

    for (let i = 0; i < arr1.length; i++) {
        arr2Copy.push(arr1[i]);
    }

    for (let i = 0; i < arr2Right.length; i++) {
        arr2Copy.push(arr2Right[i]);
    }
    return arr2Copy;
}

let frankenResult = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);


// Basic Algorithm Scripting: Falsy Bouncer

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let polygraph = [];
    let theTruth = [];
    arr.forEach(e => polygraph.push(Boolean(e)));
    polygraph.forEach((e, index) => {
        if (e) {
            theTruth.push(arr[index]);
        }
    });
    arr = theTruth;
    return arr;
}

let theTruthIs = bouncer([false, null, 0, NaN, undefined, ""]);


// Basic Algorithm Scripting: Where do I Belong

// Return the lowest index at which a value(second argument) should be inserted into an array(first argument)
// once it has been sorted.The returned value should be a number.

// For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1(index 0), but less than 2(index 1).

//   Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted
// it will look like[3, 5, 20] and 19 is less than 20(index 2) and greater than 5(index 1).

function getIndexToIns(arr, num) {
    // sort the array
    let sortedArr = arr.sort((a, b) => { return a - b; });
    console.log('sortedArr', sortedArr);
    // contrast the second argument with each element in the sorted array
    // if it is greater than the element, continue, if it is smaller, insert before it
    let rightIndex = 0;
    let theIndex = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        if (num > sortedArr[i]) {
            continue;
        } else if (num == sortedArr[i]) {
            theIndex = i;
        }
    }
    if (num < arr[rightIndex - 1] && num < arr[rightIndex]) {
        theIndex = rightIndex;
    }
    num = theIndex;
    return num;
}

let getIt = getIndexToIns([40, 60], 50);
console.log('getIt: ', getIt);
