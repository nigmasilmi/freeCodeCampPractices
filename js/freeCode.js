// usersObj = { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } };
// function countOnline(usersObj) {
//     let counter = 0;
//     for(let user in usersObj){
//        if(usersObj[user].online == true){
//            counter += 1;
//        }
//     }
//     return counter;

// }


// let test = countOnline(usersObj);
// console.log(test);

// //Basic Data Structures: Generate an Array of All Object Keys with Object.keys()

// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };

//   function getArrayOfUsers(obj) {
//     // change code below this line
//     return Object.keys(obj);
//     // change code above this line
//   }

//   console.log(getArrayOfUsers(users));

//   //Introduction to Basic Algorithm Scripting


//   function reverseString(str) {
//     let strArr = str.split('');
//     let reverseArr = [];
//     for(let i=strArr.length-1; i>-1; i-- ){
//       reverseArr.push(str[i]);
//     }
//     str = reverseArr.join('');

//     return str;
//   }

//   let pretty = reverseString("hello");
//   console.log(pretty);

//   //Basic Algorithm Scripting: Find the Longest Word in a String

//   function findLongestWordLength(str) {
//     let strInParts = str.split(' ');
//     let theLongest = '';
//     for(let i=0; i<strInParts.length; i++){
//       if(strInParts[i].length > theLongest.length){
//         theLongest = strInParts[i];
//         console.log(theLongest.length);

//       }
//       str = theLongest;
//     }
//     return str.length;
//   }

//   findLongestWordLength("The quick brown fox jumped over the lazy dog");

//   // Basic Algorithm Scripting: Return Largest Numbers in Arrays

//   function largestOfFour(arr) {
//     // You can do this!
//     theLongest = 0;
//     let totalSum = 0;
//     objMap = {};
//     for(let i=0; i<arr.length; i++){
//         for(let f=0; f<arr[i].length; f++){
//             totalSum = totalSum + arr[i][f];
//             console.log(totalSum);
//         }
//         objMap[i] = totalSum;
//         totalSum = 0;

//     }
//     console.log(objMap);
//     let indexOfWinner = 0;
//     for(let obj in objMap){
//         if(objMap[obj] > totalSum){
//             indexOfWinner = obj;
//         }
//     }
//     arr = arr[indexOfWinner];
//     console.log('arr es:', arr);
//     return arr;
//   }

// //   let prettier = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// //   let prettier = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, // 1]]);
//   let prettier = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//   console.log('this is the winner array: ', prettier);

// function largestOfFour(arr) {
//     let theBiggest = null;
//     let theResetter = 0;
//     let theWinnerArr = [];
//     for(let i=0; i<arr.length; i++){
//         for(let f=0; f<arr[i].length; f++){
//             if(arr[i][f] > theBiggest){
//                 theBiggest = arr[i][f];
//             }else if(arr[i][f]<0){
//                 theResetter = arr[i][f];
//             }

//         }
//         theWinnerArr.push(theBiggest);
//         theBiggest = theResetter;
//     }
//     arr = theWinnerArr;
//     return arr;
// }

// let pretty = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
// console.log(pretty);

function confirmEnding(str, target) {
    //separar el string en sus elementos
    let strSplitted = str.split('');
    let strBackArr = [];
    let strToCompare = [];
    let targetBackArr = [];
    // darle vuelta a él y al target
    for (let i = strSplitted.length - 1; i > -1; i--) {
        strBackArr.push(strSplitted[i]);
    }

    for(let y=target.length -1; y > -1; y-- ){
        targetBackArr.push(target[y]);
    }
    console.log('targetBackArr:',targetBackArr);
    console.log('strBackArr:',strBackArr);
    let targetToCompareFinal = targetBackArr.join('');

    //comparar si el target en su longitud es igual al str reverso hasta la longitud del target
    let targetLen = target.length;
    for (let b = 0; b < targetLen; b++) {
        strToCompare.push(strBackArr[b]);
    }
    console.log('strToCompare: ', strToCompare);
    let strToCompareFinal = strToCompare.join('');
    console.log('strToCompareFinal: ', strToCompareFinal);

    if (strToCompareFinal === targetToCompareFinal) {
        return true;
    } else {
        return false;
    }
}

let pretty = confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
console.log(pretty);