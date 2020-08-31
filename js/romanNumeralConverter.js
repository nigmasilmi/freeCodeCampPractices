function convertToRoman(num) {
    let romanResult = [];
    const romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    const digits = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    for (let a = digits.length - 1; a >= 0; a--) {
        while (digits[a] <= num) {
            romanResult.push(romans[a]);
            console.log(romanResult);
            num -= digits[a];
        }
    }

    return romanResult.join('');

}

let theRoman = convertToRoman(186);
console.log(theRoman);