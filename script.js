console.log("Hello World!");

let OUTPUT;
let shoppingList = [];

/**********************
Functions
**********************/

function start() {
    OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "Welcome to the Tongan Goods Shop!<br><br>";
}

function addItem() {
    let item = document.getElementById("itemInput").value;

    if (item === "") {
        OUTPUT.innerHTML += "Please enter an item.<br>";
        return;
    }

    shoppingList.push(item);

    OUTPUT.innerHTML += item + " has been added to the cart.<br>";

    document.getElementById("itemInput").value = "";
}

function addSpecificItem(item) {
    shoppingList.push(item);

    OUTPUT.innerHTML += item + " has been added to the cart.<br>";
}

function showList() {
    OUTPUT.innerHTML += "<hr>";
    OUTPUT.innerHTML += "<h3>Your Shopping List:</h3>";

    if (shoppingList.length === 0) {
        OUTPUT.innerHTML += "Your cart is empty.<br>";
        return;
    }

    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += (i + 1) + ". " + shoppingList[i] + "<br>";
    }

    OUTPUT.innerHTML += "<hr>";
}

function clearList() {
    shoppingList = [];
    OUTPUT.innerHTML += "Shopping list cleared.<br>";
}