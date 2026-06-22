console.log("Hello world!")
let OUTPUT;
let shoppingList = [];

/**********************
Functions
**********************/

function addItem() {

    let item = document.getElementById("itemInput").value;

    shoppingList.push(item);

    OUTPUT.innerHTML += "You have added " + item + " to the list <br>";

}

function showList() {
 OUTPUT.innerHTML += "<br>These are the items on your shopping list:<br>";
     OUTPUT.innerHTML +="<br>Sapasui $10</br>"
     OUTPUT.innerHTML +="PaniPopo $8"
     OUTPUT.innerHTML +="Palusami $12"
     OUTPUT.innerHTML +="Ota Ika $10"
    OUTPUT.innerHTML += "<br>Otai $8</br>"
    OUTPUT.innerHTML +="<br>Coconut Water $10</br>"
    OUTPUT.innerHTML +="<br>Chocolate MilkShake $6</br>"
    OUTPUT.innerHTML +="<br>Strawberry MilkShake $6</br>"
    OUTPUT.innerHTML +="<br>Water $5</br>"
  
    


    for (let i = 0; i < shoppingList.length; i++) {

        OUTPUT.innerHTML += shoppingList[i] + "<br>";

    }

}

function start() {

    OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    OUTPUT.innerHTML = "";

}

