function repeatStringNumTimes(str, num) {
    // repeat after me
    let repeated ='';
    if(num > 0){
        for(let i=0; i<num; i++){
            repeated += str;
        }
    }
    str = repeated;
    return str;
  }
  
 //  

 function truncateString(str, num) {
    // Clear out that junk in your trunk
    let strLen = str.length;
    let arra = [];
    if (strLen > num){
        for(let i=0; i<num; i++){
            // console.log(str[i]);
            arra.push(str[i]);
        }
    arra.push('...');
    perro = arra.join('');
    str = perro;
    console.log(perro);

    }
    return str;
  }

//   let pretty = truncateString('vamosaver', 3);
  let pretty = truncateString("A-tisket a-tasket A green and yellow basket", 8);

console.log('el resultado es', pretty);