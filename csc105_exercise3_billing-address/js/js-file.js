/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
    var checkbox = document.getElementById("same");
    var shipName = document.getElementById("shippingName");
    var shipZip = document.getElementById("shippingZip");
    var billName = document.getElementById("billingName");
    var billZip = document.getElementById("billingZip");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            billName.value = shipName.value;
            billZip.value = shipZip.value;
        } else {
            billName.value = "";
            billZip.value = "";
        }
    });
}
