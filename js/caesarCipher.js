function rot13(str) {
    let theShift = 13;
    let regex = /[A-Z]/g;

    let newStr = str.replace(regex, function (match, offset, string) {
        let siEntranEnRango = 0;
        let faltaSustraer = 0;
        if (match) {
            // console.log(match, offset, string[offset]);
            let substract = (string.charCodeAt(offset)) - theShift;
            if (substract < 65) {
                siEntranEnRango = string.charCodeAt(offset) - 65;
                faltaSustraer = theShift - siEntranEnRango;
                return String.fromCharCode((90 - faltaSustraer + 1));

            } else {
                return String.fromCharCode(substract);
            }
            // return String.fromCharCode(string.charCodeAt(offset) - 13);
        }
    });
    return newStr;
}

let rotty = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
console.log(rotty);