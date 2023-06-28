let calculateButtonElement = document.getElementById('calculateButton');
let billAmountElement = document.getElementById('billAmount');
let percentageTipElement = document.getElementById('percentageTip');
let tipAmountElement = document.getElementById('tipAmount');
let totalAmountElement = document.getElementById('totalAmount');
let errorMessageElement = document.getElementById('errorMessage');


calculateButtonElement.onclick = function() {


    let billAmountValue = parseInt(billAmountElement.value);
    let percentageTipValue = parseInt(percentageTipElement.value);


    if (billAmountElement.value === '') {
        errorMessageElement.textContent = "Please enter a valid input";


    } else if (percentageTipElement.value === '') {
        errorMessageElement.textContent = "Please enter a valid input";
    } else {
        errorMessageElement.textContent = '';
        let caluclatedTip = ((percentageTipValue / 100) * billAmountValue);
        let totalAmountValue = (billAmountValue + caluclatedTip);


        tipAmountElement.value = caluclatedTip;
        totalAmountElement.value = totalAmountValue;
    }

}