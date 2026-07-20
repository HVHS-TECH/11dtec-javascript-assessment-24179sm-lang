/**************************************
 MAIN CODE
**************************************/

alert("Welcome to my program!");

var userName = prompt("What is your name?");

displayMenu();

/**************************************
 FUNCTIONS
**************************************/

function displayMenu() {

    var pick = prompt(
        "Hello " + userName + "!\n\n" +
        "What do you want today?\n\n" +
        "1. Sapasui\n" +
        "2. Pani Popo\n" +
        "3. Palusami\n" +
        "4. Ota Ika"
    );

    if (pick == "1") {
        alert("Thank you, " + userName + "! You ordered Sapasui this cost $10.");
    }
    else if (pick == "2") {
        alert("Thank you, " + userName + "! You ordered Pani Popo this cost $10.");
    }
    else if (pick == "3") {
        alert("Thank you, " + userName + "! You ordered Palusami this cost $10.");
    }
    else if (pick == "4") {
        alert("Thank you, " + userName + "! You ordered Ota Ika this cost $10.");
    }
    else {
        alert("Sorry, that is not a valid choice.");
    }


 alert("your total is $10 ")
}





























console.log("Hello Welcome To Tongan Goods!");

let OUTPUT;
let shoppingList = [];
let total = 0;

function addItem(item, price) {
    shoppingList.push(item);
    total = total + price;

    OUTPUT.innerHTML += item + " added to your order.<br>";
}

function showList() {
    OUTPUT.innerHTML = "<b>Your Order:</b><br>";

    if (shoppingList.length === 0) {
        OUTPUT.innerHTML += "No items ordered yet.";
    } else {
        for (let i = 0; i < shoppingList.length; i++) {
            OUTPUT.innerHTML += shoppingList[i] + "<br>";
        }

        OUTPUT.innerHTML += "<br><b>Total: $" + total + "</b>";
    }
}

function clearOrder() {
    shoppingList = [];
    total = 0;
    OUTPUT.innerHTML = "Your order has been cleared.";
}

function pay() {
    if (shoppingList.length === 0) {
        OUTPUT.innerHTML = "Your order is empty.";
        return;
    }

    let money = Number(prompt("How much money do you have?"));

    if (money >= total) {
        let change = money - total;

        OUTPUT.innerHTML +=
            "<br><br>Payment accepted!<br>" +
            "Your change is $" + change +
            "<br>Thank you for visiting Tongan Goods!";
    } else {
        let needed = total - money;

        OUTPUT.innerHTML +=
            "<br><br>Payment declined.<br>" +
            "You need $" + needed + " more.";
    }
}

function start() {
    OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "Welcome to Tongan Goods!";
}




