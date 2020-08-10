
// Basic JavaScript: Replace Loops using Recursion

function sum(arr, n) {
    // Only change code below this line


    // Only change code above this line
}

function multiply(arr, n) {
    // condición base
    if (n <= 0) {
        return 1;
        // recursion part
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

let recu = multiply([1, 2, 3], 2);
// console.log(recu);

function sum(arr, n) {
    // condición base
    if (n <= 0) {
        return 0;
    }
    else {
        return sum(arr, n - 1) + arr[n - 1];
    }

}

let suma = sum([2, 3, 4, 5], 3); // should equal 9

// console.log(suma);

// Basic JavaScript: Use Recursion to Create a Countdown

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

let cuenta = countdown(5); //should return [5, 4, 3, 2, 1]
// console.log(cuenta);

// Basic JavaScript: Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
    // base case
    if (startNum && !endNum) {
        endNum = startNum;
    }
    if (startNum > endNum) {
        return [];
    } else {
        let bubble = rangeOfNumbers(startNum + 1, endNum);
        bubble.unshift(startNum);
        return bubble;
    }

}

let bubbling = rangeOfNumbers(4);
// console.log(bubbling);