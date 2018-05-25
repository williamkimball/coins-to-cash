let piggybank = {
    quarters: 324,
    nickels: 23,
    dimes: 445,
    pennies: 12
};

let dollarAmmount = 0;

let dollarCount = () => {
    Object.keys(piggybank).forEach(key => {
        if (key === "quarters") {
            dollarAmmount += (piggybank[key] / 25);
        } else if (key === "nickels") {
            dollarAmmount += (piggybank[key] / 5);
        } else if (key === "dimes") {
            dollarAmmount += (piggybank[key] / 10);
        } else if (key === "pennies") {
            dollarAmmount += (piggybank[key] / 1);
        }
    });
    console.log(dollarAmmount)
}

dollarCount()





let coinCounts = (dollarsToCount) => {
    let coinCount = {};
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;

    let dollarsmultiplied = dollarsToCount * 100.00; //rounds by multiplying by 100
    while ((dollarsmultiplied % 25) >= 0 && dollarsmultiplied >= 25) {
        dollarsmultiplied -= 25;
        quarter++;
    } 
    while ((dollarsmultiplied % 10) >= 0 && dollarsmultiplied > 10) {
        dollarsmultiplied -= 10;
        dime++;
    } 
    while ((dollarsmultiplied % 5) >= 0 && dollarsmultiplied > 5) {
        dollarsmultiplied -= 5;
        nickel++;
    } 
    while (dollarsmultiplied > 0 ) {
        dollarsmultiplied -= 1;
        penny++;
    }
    Object.assign(coinCount, { quarters: quarter, dimes: dime, nickels: nickel, pennies: penny });

    console.log("$", dollarsToCount, "=", coinCount)
}

coinCounts(1.41);
coinCounts(1)