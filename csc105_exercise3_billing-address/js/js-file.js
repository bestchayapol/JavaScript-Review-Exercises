/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
    let checkbox = document.getElementById("same");

    if (checkbox.checked) {
        let shipName = document.getElementById("shippingName").value;
        let shipZip = document.getElementById("shippingZip").value;
        document.getElementById("billingName").value = `${shipName}`;
        document.getElementById("billingZip").value = `${shipZip}`;
    } else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}
