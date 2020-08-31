function checkCashRegister(price, cash, cid) {
    let totalCashInDrawer = 0;
    // calcular el vuelto
    let vuelto = 0;
    let theStatus = '';
    // let vueltoArr = [];
    let vueltoObj = {};
    let finalVuelto = [];


    const currencyVals = [
        ['PENNY', 0.01],
        ['NICKEL', 0.05],
        ['DIME', 0.1],
        ['QUARTER', 0.25],
        ['ONE', 1],
        ['FIVE', 5],
        ['TEN', 10],
        ['TWENTY', 20],
        ['ONE HUNDRED', 100],
    ];


    // calculate the total cash in drawer
    for (let a = 0; a < cid.length; a++) {
        totalCashInDrawer += cid[a][1];
    }
    // console.log('total cash in drawer', totalCashInDrawer);

    // calculate el vuelto
    vuelto = cash - price;
    // guardar el vuelto para el caso de ser exactamente igual
    let vueltoi = cash - price;
    // console.log('vuelto que hay que dar', vuelto);

    // calcular la disponibilidad para dar el vuelto;
    if (vuelto > totalCashInDrawer) {
        theStatus = 'INSUFFICIENT_FUNDS';
        return { status: theStatus, change: [] };
    }
    if (vuelto == totalCashInDrawer) {
        theStatus = 'CLOSED';
    }
    if (vuelto < totalCashInDrawer) {
        theStatus = 'OPEN';
    }


    // recorrer currencyVals de mayor a menor

    for (let i = currencyVals.length - 1; i >= 0; i--) {
        // hay de esa denominación en caja?
        for (let j = cid.length - 1; j >= 0; j--) {
            if (currencyVals[i][0] == cid[j][0]) {
                // es la denominación menor al vuelto que hay que dar?
                while (currencyVals[i][1] <= vuelto && cid[j][1] !== 0) {
                    // sácalo de la caja
                    cid[j][1] -= currencyVals[i][1];
                    // ponlo en la mano o donde estés acumulando el vuelto
                    if (vueltoObj.hasOwnProperty(cid[j][0])) {
                        vueltoObj[cid[j][0]] += currencyVals[i][1];
                    } else {
                        vueltoObj[cid[j][0]] = currencyVals[i][1];
                    }
                    //réstalo al vuelto que hay que dar
                    vuelto = (vuelto - currencyVals[i][1]).toFixed(2);
                    // sigue iterando
                }
            }
        }

    }

    // si el vuelto que hay que dar es exactamente lo que hay en el drawer
    // el change debe ser un objeto ordenado de menor a mayor con los valores de las denominaciones no usadas en 0
    if (theStatus == 'CLOSED' && vueltoi == totalCashInDrawer) {
        for (let s = 0; s < currencyVals.length; s++) {
            for (let m in vueltoObj) {
                if (currencyVals[s][0] !== m) {
                    finalVuelto.push([currencyVals[s][0], 0]);
                } else {
                    finalVuelto.push([m, Number((vueltoObj[m]).toFixed(1))]);
                }
            }
        }
    }


    // generar el array del vuelto final ordenado
    if (theStatus == 'OPEN') {
        for (let s = currencyVals.length - 1; s >= 0; s--) {
            for (let m in vueltoObj) {
                if (currencyVals[s][0] == m) {
                    finalVuelto.push([m, vueltoObj[m]]);
                }
            }
        }
    }


    // si no se puede dar el vuelto exacto
    if (vuelto > 0) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }

    // console.log('esto es lo que va quedando en caja', cid);
    // console.log('esto es el vuelto', vuelto);
    // console.log('esto es lo que vamos sacando para dar vuelto', vueltoObj);
    // console.log('este es el compendio del vuelto', finalVuelto);
    return { status: theStatus, change: finalVuelto };

}

// let makeTheSell = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }
// let makeTheSell = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return { status: "OPEN", change: [["QUARTER", 0.5]] }.
// let makeTheSell = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return { status: "INSUFFICIENT_FUNDS", change: [] }.
// let makeTheSell = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return { status: "INSUFFICIENT_FUNDS", change: [] }.
let makeTheSell = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }.
console.log(makeTheSell);