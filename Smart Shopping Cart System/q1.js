let items = ["Soap", "Tissue", "Egg"];
let prices = [200, 150, 300];
let total = 0;

for(let i = 0; i < items.length; i++) {
    console.log(items[i] + " = " + prices[i]);
    total = total + prices[i];
}

function billCalc(amount) {
    let tax = amount * 0.05;
    let finalizedTotal = amount + tax;

    if(finalizedTotal > 5000) {
        console.log("Free Delivery");
    }
    else {
        finalizedTotal = finalizedTotal + 200;
        console.log("Delivery Charges Applied");
    }
    return finalTotal;
}
let bill = billCalc(total);
console.log("Total Bill = " + bill);