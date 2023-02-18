var fruits = ["Banana", "Mango", "Apple", "Pear"];

function loadFruits() {
    var myFavFruits = "";
    for (let index = 0; index < fruits.length; index++) {
        myFavFruits += "<li>" + fruits[index] + "</li>";
    }
    document.getElementById("fruits").innerHTML = myFavFruits;
    // myFavFruits.addEventListener("click", function() {
    //     var favFruits = prompt("What is your favorite fruits?");
    //     var list = document.getElementById("myList");
    //     var listItem = document.createElement("li");
    //     listItem.textContent = favFruits;
    //     list.appendChild(listItem);
    // })
}

function myFunction() {
    var favFruits = prompt("What is your favorite fruits?");
    if (favFruits.length == 0) {
        return;
    }
    else {
        fruits.push(favFruits);
        loadFruits();
    }
}