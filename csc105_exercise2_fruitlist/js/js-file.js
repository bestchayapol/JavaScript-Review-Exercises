function myFunction() {
    var myFavFruits = document.getElementById("addFav");
    myFavFruits.addEventListener("click", function() {
        var favFruits = prompt("What is your favorite fruits?");
        var list = document.getElementById("myList");
        var listItem = document.createElement("li");
        listItem.textContent = favFruits;
        list.appendChild(listItem);
    })
}