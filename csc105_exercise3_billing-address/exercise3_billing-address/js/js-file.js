/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
    const checkbox = document.getElementById("same");
    const shipName = document.getElementById("shippingName");
    const shipZip = document.getElementById("shippingZip");
    const billName = document.getElementById("billingName");
    const billZip = document.getElementById("billingZip");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            billName.value = shipName.value;
            billZip.value = shipZip.value;
        }
        else {
            billName.value = "";
            billZip.value = "";
        }
    })
}