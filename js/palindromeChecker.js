function palindrome(str) {
    str = str.replace("_", ' ');
    let alphaRegex = /\w/g;
    let onlyLettersFwd = (str.match(alphaRegex)).join('').toLowerCase();
    let onlyLettersBckw = (str.match(alphaRegex)).reverse().join('').toLowerCase();
    if (onlyLettersBckw === onlyLettersFwd) {
        return true;
    } else {
        return false;

    }
}



let test = palindrome("A man, a plan, a canal. Panama");  //should return true
let test2 = palindrome("0_0(: /-\ :) 0-0");  //should return true
let test3 = palindrome("five|\_/|four");  //should return false


