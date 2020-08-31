function telephoneCheck(str) {
    const howManyNumbersRegex = /[0-9]/g;
    let numberTest = str.match(howManyNumbersRegex).length;
    let groupingNums = /\d{3}(\s|-)\d{3}(\s|-)\d{4}/;
    let ifTherIsParen = /^1\s[\(]|\d{3}(\))(\s|-)\d{3}(\s|-)\d{4}/;
    let parenOrDash = /^1\s*[(]*\d{3}[)]*-*\s*\d{3}-\d{4}/;
    let noParenNoDash = /^1*\s\d{3}\s\d{3}\s\d{4}/;
    let elevenTwoDashes = /^1*\s\d{3}-\d{3}-\d{4}/;

    if (numberTest > 11 || numberTest < 10) {
        return false;
    }

    //tiene parentesis desapareados?
    if (/[()]/g.test(str)) {
        console.log('tiene paréntesis desapareados');
        if (str.match(/[()]/g).length % 2 != 0) {
            return false;
        }
    }


    //tiene 11 números? el primero debe ser 1
    if (numberTest == 11) {
        if (!/-/g.test(str) && !/[()]/g.test(str)) {
            console.log('tiene 11 números sin dashes ni paréntesis');
            return noParenNoDash.test(str);
        }
        if (/-/g.test(str) || /[()]/g.test(str)) {
            console.log('tiene 11 números y dashes o paréntesis');
            return parenOrDash.test(str);
        }

        if (str.match(/-/g).length == 2) {
            console.log('tiene 11 números y dos dashes');
            return elevenTwoDashes.test(str);
        }
    }
    // tiene 10 números? 
    if (numberTest == 10) {
        console.log('tiene diez números');
        if (!/-/g.test(str) && !/[()]/g.test(str)) {
            return /\d{10}/.test(str);
        }
        if (/-/g.test(str)) {
            if (str.match(/-/g).length == 2) {
                console.log('tiene 10 números y dos dashes');
                return /\d{3}-\d{3}-\d{4}/.test(str);
            }
            if (str.match(/-/g).length > 2) {
                console.log('tiene diez números y más de dos dashes');
                return groupingNums.test(str);
            }
        }

        if (/[()]/g.test(str)) {
            if (str.match(/[()]/g).length > 2) {
                console.log('tiene diez números y más de dos paréntesis');
                return ifTherIsParen.test(str);
            }
            if (str.match(/[()]/g).length == 2) {
                console.log('tiene diez números dos paréntesis');
                return /[(]\d{3}[)]\d{3}-\d{4}/.test(str);
            }
        }

    }

}


let keepTalking = telephoneCheck("1 555)555-5555");
console.log(keepTalking);