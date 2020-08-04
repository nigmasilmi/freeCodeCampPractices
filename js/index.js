// function checkPalindrome(inputString) {
//     // iterate over the inputString
//     let arrOrigin = [];
//     let arrReverse = [];
//     let equal = 0;
//     areEqual = false;
//     for (let i = 0; i < inputString.length; i++) {
//         arrOrigin.push(inputString[i]);
//     }
//     console.log(arrOrigin);

//     for (let i = inputString.length - 1; i >= 0; i--) {
//         arrReverse.push(inputString[i]);
//     }

//     console.log(arrReverse);

//     for (let i = 0; i < inputString.length; i++) {
//         if (arrOrigin[i] == arrReverse[i]) {
//             console.log('son iguales');
//             equal += 1;
//             console.log(equal);
//         }
//     }
//     console.log(equal);
//     console.log(inputString.length);
//  return Boolean(equal == inputString.length);

// }

// checkPalindrome('ababa');
// array2 = [-23, 4, -3, 8, -12];
// inputArray = [3, 6, -2, -5, 7, 3];

// function adjacentElementsProduct(inputArray) {
//     let multiTot=inputArray[0] * inputArray[1];
//     for(i=0; i<inputArray.length; i++){
//         let multi = inputArray[i]*inputArray[i+1];
//         if(multi > multiTot){
//             multiTot = multi;
//         }
//     }
//     console.log(multiTot);
//     return multiTot;
// }

// adjacentElementsProduct(array2);

// let areaTot = 1;
// let arrSum = [];
// function shapeArea(n) {
//     for(let i=1; i<n+1; i++){
//     arrSum.push(4*(i-1));
//     }
//     console.log(arrSum);
//     for(let x=0; x<arrSum.length; x++){
//         areaTot += arrSum[x]; 
//     }
//     console.log(areaTot);
//     return areaTot;
// }

// shapeArea(8000);



// statues = [6, 2, 3, 8];
// missingStatues = [];
// missingCount = 0;
// function makeArrayConsecutive2(statues) {
// for(let i=0; i<statues.length; i++){
//     let statue = statues[i];
//     console.log('statue', i, statue);
//     let statueCompare = statues[i+1];
//     console.log('statues', i+1, statueCompare);
//     if(statue < statueCompare){
//         statues[i] = statue;
//         statues[i+1] = statueCompare;
//     }else if (statueCompare < statue){
//         statues[i] = statueCompare;
//         statues[i+1] = statue;

//     }
// }

//     let nuMax = statues[statues.length-1];
//     let nuMin = statues[0];
//     console.log(nuMax);
//         for(let b=nuMin; b<nuMax+1; b++ ){
//             console.log(statues.indexOf(b));
//             if(statues.indexOf(b) === -1){
//             missingStatues.push(b);
//             missingCount++ ;
//         }
//     }
// console.log(missingStatues);
// console.log(statues.indexOf(1));
// console.log(missingCount);
// return missingCount;
// }
// makeArrayConsecutive2(statues);


// let sequence = [1,3,2,1];

// function almostIncreasingSequence(sequence) {
//     //sort array in ascending order
//     const sortedSequence = sequence.sort((a, b) => {
//         return a - b;
//     });
//     // console.log(sortedSequence);
//     // check if there are repeated numbers
//     // using object to map content

//     let mapContent = {};

//     sortedSequence.forEach((element) => {
//         if (mapContent[element]) {
//             mapContent[element]++;

//         } else {
//             mapContent[element] = 1;
//         }

//     });

//     // iterate over the object to find if an element has a value greater than 1
//     let isPossible = false;
//     let repeatedEle = 0;
//     for (let property in mapContent) {
//         if (mapContent[property] > 1) {
//             repeatedEle++;
//         }
//     }
//     if (repeatedEle >= 2) {
//         isPossible = false;
//     } else {
//         isPossible = true;
//     }

//     return isPossible;
// }

// let pretty = almostIncreasingSequence(sequence);
// // console.log(pretty);

// let matrix = [
//     [1, 1, 1, 0],
//     [0, 5, 0, 1],
//     [2, 1, 3, 10]
// ];


// function matrixElementsSum(matrix) {
//     let totalCost = 0;
//     if(matrix.length === 1 && matrix[0] === 0){
//         return totalCost;
//     }else{
//     for (let f = 0; f < matrix.length; f++) {
//         //check if we are in the first row ((no possible ghosts upstairs))
//         if (f === 0) {
//             for (let c = 0; c < matrix[f].length; c++) {
//                 if (matrix[f][c] === 0) {
//                     matrix[1][c] = 0;
//                     matrix[2][c] = 0;
//                     totalCost += 0;
//                     console.log(matrix[1][c]);
//                     console.log(matrix[2][c]);

//                 } else {
//                     totalCost += matrix[f][c];
//                 }
//             }
//         }
//         if (f !== 0) {
//             for (let c = 0; c < matrix[f].length; c++) {
//                 if (matrix[f][c] === 0) {
//                     totalCost += 0;

//                 } else {
//                     if (matrix[f - 1][c] === 0 ) {
//                         totalCost += 0;
//                     } else {
//                         totalCost += matrix[f][c];
//                     }
//                 }
//             }
//         }
//     }
// }
//     return totalCost;

// }
// let pretty = matrixElementsSum(matrix);
// console.log(pretty);

// inputArray = ["aba", "aa", "ad", "vcd", "aba"];
// inputArray = ["aa"];

// function allLongestStrings(inputArray) {
//     //array to kkep the results
//     let resultArray = [];
//     //length Counter
//     let maxCount = 0;
//     //calculate each strings length
//     inputArray.forEach(element => {

//         let count = element.length;
//         if (count > maxCount) {
//             maxCount = count;
//         }

//     });
//     inputArray.forEach((elem)=>{
//         if(elem.length === maxCount){
//             resultArray.push(elem);
//         }
//     });
//     return resultArray;
// }

// let pretty = allLongestStrings(inputArray);
// console.log(pretty);


// let s1= 'aabcc';
// let s2 = 'adcaa';

// function commonCharacterCount(s1, s2) {
//     let resultArray = [];
//     let mapResult = {};
//     let splitteds1 = s1.split('');
//     let splitteds2 = s2.split('');
//     for(let i=0; i<splitteds1.length; i++){
//         for(let f=0; f<splitteds2.length; f++){
//             if(splitteds1[i]===splitteds2[f]){
//                 resultArray.push(splitteds2[f]);
//             }
//         }
//     }
//     console.log(resultArray);
// resultArray.forEach((element)=>{
//     if(mapResult[element]){
//         mapResult[element]++;
//     }else{
//         mapResult[element] = 1;
//     }
// });
// let commonCount = 0;
// for (let common in mapResult){
//     commonCount +=1;
// }
// return commonCount;
// }

// let pretty = commonCharacterCount(s1, s2);
// console.log(pretty);

// let s1 = 'a';
// let s2 = 'aaa';

// function commonCharacterCount(s1, s2) {
//     let mapElement1 = {};
//     let mapElement2 = {};
//     s1.split('').forEach(element => {
//         if (mapElement1[element]) {
//             mapElement1[element]++;
//         } else {
//             mapElement1[element] = 1;
//         }
//     });

//     s2.split('').forEach(element => {
//         if (mapElement2[element]) {
//             mapElement2[element]++;
//         } else {
//             mapElement2[element] = 1;
//         }
//     });

// let counter = 0;
// for (let common in mapElement1){
//     for(let hereAlso in mapElement2){
//         if(common === hereAlso){
//             if(mapElement1[common] < mapElement2[hereAlso]){
//                 counter += mapElement1[common];
//             }else{
//                 counter += mapElement2[hereAlso];
//             }
//         }
//     }
// }
// return counter;
// }
// let pretty = commonCharacterCount(s1, s2);
// console.log(pretty);

// n = 1230;
// n = 239017;
// function isLucky(n) {
// let stringNum = n.toString().split('');
// let numLength = stringNum.length;
// let numbersToSum = numLength/2;
// let leftArr = [];
// let rightArr = [];

// for(let i=0; i<stringNum.length; i++){
//    if(i < numbersToSum){
//     leftArr.push(stringNum[i]);
//    }else{
//     rightArr.push(stringNum[i]);
//    }
// }

// let rightSum = 0;
// let leftSum = 0;

// for(let number of leftArr){
//     leftSum += parseInt(number);

// }

// for(let number of rightArr){
//     rightSum += parseInt(number);

// }

// if(leftSum === rightSum){
//     return true;
// }else{
//     return false;
// }

// }



// // let pretty = isLucky(n);
// // console.log(pretty);
// a = [-1, 150, 190, 170, -1, -1, 160, 180];
// a = [-1, 150, 190, 170, -1, -1, 160, 180];

// // sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// function sortByHeight(a) {
// //find the places where there are trees
// let notBeOccupied = [];
// let peopleHeight = [];
// for(let i=0; i<a.length; i++){
//     if (a[i] === -1){
//         notBeOccupied.push(i);
//     }else{
//         peopleHeight.push(a[i]);
//     }
// }

// let peopleInOrder = peopleHeight.sort((a,b)=>{
//     return a-b;
// });

// console.log(peopleInOrder);
// let orderEveryOne = [];
// for(let i of notBeOccupied){
//     orderEveryOne[i] = -1;
// }

// let tobeIndex = 0;
// for(let x=0; x<a.length; x++){
//     if(orderEveryOne[x] !== -1){
//         orderEveryOne[x] = peopleInOrder[tobeIndex];
//         tobeIndex++;
//     }
// }

// console.log(orderEveryOne);
// }

// let pretty = sortByHeight(a);
// console.log(pretty);
// a=[50, 60, 60, 45, 70];

// function alternatingSums(a) {
// let oddGroup = [];
// let evenGroup = [];
// // separate in two groups
// a.forEach((element, index) => {
//     if(index % 2 === 0){
//         evenGroup.push(element);
//     }else{
//         oddGroup.push(element);
//     }

// });

// let evenSum = 0;
// for(let element of evenGroup){
//     evenSum += element;
// }
// let oddSum = 0;
// for(let element of oddGroup){
//     oddSum += element;
// }

// let result = [];
// result.push(evenSum);
// result.push(oddSum);

// return result;
// }

// let pretty = alternatingSums(a);
// console.log(pretty);

// picture = ["abc", "ded"];
// function addBorder(picture) {
//     //check the array length
//     let picLength = picture.length;
//     //ckeck the length of the elements
//     let elemLength = picture[0].length + 2;
//     //add two new strings, one before and one after
//     let newPic =[];
//     newPic.length = picLength + 2;
//     //initialize the first and the last elements
//     newPic[0]= '';
//     newPic[picLength + 1]='';
//     //fill the elements with the same number of stars as the element length
//     for(x=0; x<elemLength; x++){
//         newPic[0]+= "*";
//         newPic[picLength + 1]+= "*";
//     }

//     // fill the inner elements with the original ones and stars at their sides
//    for(let i=0; i<picture.length; i++){
//     newPic[i+1]= "*" + picture[i] + "*";
//    }
//     console.log(newPic);
// return newPic;

// }

// let pretty = addBorder(picture);
// console.log(pretty) ;

// sequence = [1, 3, 2, 1]; // false
// sequence = [1, 3, 2]; // true
// sequence = [3, 6, 5, 8, 10, 20, 15]; // false

// function almostIncreasingSequence(sequence) {
//     let itsOk = [];
//     let notOk = [];
//     for(let x=0; x<sequence.length; x++){
//         if(sequence[x] < sequence[x+1]){
//             itsOk.push('a');
//         }else if(sequence[x] < sequence[x+2]){
//             sequence.splice(x+1, 1);
//             notOk.push('a');
//         }else{
//             notOk.push('a');
//         }
//     }
//     if(notOk.length > 1 ){
//         return false;
//     }else{
//         return true;
//     }
// }
// let pretty = almostIncreasingSequence(sequence);
// console.log(pretty);
// a = [1,2,3];
// b = [2,1,3];

// function areSimilar(a, b){
//     for(let i of a){
//         for (let k of b){
//             if(i === k){
//                 reportArr.push('e');
//             }else if( i !== k){
//                 firstDiffB = k;
//             }
//         }
//     }
// }

// function stringContained(stringToTest, motherString){
//     let motherSplitted = motherString.split(' ');
//     console.log(motherSplitted);
//     for(let word of motherSplitted){
//         if(stringToTest == word){
//             return true;
//         }else{
//             return false;
//         }
//     }

// }

// let pretty = stringContained('cara', 'cara de mono');
// console.log(pretty);

window.functions = {
    btns: () => {
        countries = ['Brasil', 'Chile', 'México', 'Perú'];
        document.querySelectorAll('.btns').forEach(element => {
            element.addEventListener('click', function (event) {
                event.preventDefault();
                let btnPressed = event.target.id;
                switch (btnPressed) {
                    case 'primero':
                        document.querySelector('#textPlace').innerHTML = countries[0];
                        break;
                    case 'segundo':
                        document.querySelector('#textPlace').innerHTML = countries[1];
                        break;
                    case 'tercero':
                        document.querySelector('#textPlace').innerHTML = countries[2];
                        break;
                    case 'cuarto':
                        document.querySelector('#textPlace').innerHTML = countries[3];
                        break;
                    default:
                        console.log('not working');
                }
            });

        });
    },

    textLine: () => {
        document.querySelector('#textLine').addEventListener('click', (e) => {
            // console.log(e.target.innerHTML);
            console.log(e.target.innerHTML);
            //saves the value in a variable to use later
            let previousVal = e.target.innerHTML;

            //transforms the div into an input element
            let theInput = document.createElement('input');

            //take the previus value and places in the input box
            theInput.setAttribute('value', previousVal);
            // identify the element in order to manipulate it
            theInput.setAttribute('id', 'doneWriting');

            //    e.target.remove()
            e.target.appendChild(theInput);
        });

    },

    done: () => {
        document.addEventListener('keypress', (e) => {
            if (e.key == 'Enter') {
                let userInput = document.querySelector('#doneWriting').value;
                document.querySelector('#textLine').innerHTML = userInput;
            }
        });

        document.addEventListener('keyup', (e) => {
            console.log(e.key);
            // let userInput = document.querySelector('#doneWriting').value;
            if (e.key !== 'Enter') {
                document.querySelector('#textLine').append(e.key);

            }
        });

    },

};

// window.functions.btns();
// window.functions.textLine();
// window.functions.done();

const arr = [-17, 24, 9, 32, 100, -80, 28, 0, -10];

function findTheNumbers(){
    let theGreatest = 0;
// find the greatest
for(let i=0; i<arr.length; i++){
    if(arr[i] > theGreatest){
        theGreatest = arr[i];
    }else{
        theGreatest = theGreatest;
    }
}
console.log('this is the greatest: ', theGreatest);

// find the mini
theMini = parseInt(theGreatest);
for(let i=0; i<arr.length; i++){
    if(parseInt(arr[i]) < theMini){
        theSecond = theMini;
        theMini = parseInt(arr[i]);
    }else{
        theMini = theMini;
    }

}
console.log('this is the smallest: ', theMini);
console.log('this is the not-so small: ', theSecond);


}

// findTheNumbers();