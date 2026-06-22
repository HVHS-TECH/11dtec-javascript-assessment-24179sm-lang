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
     OUTPUT.innerHTML +="<br> $8</br>"
     OUTPUT.innerHTML +=""
     OUTPUT.innerHTML +=""
     OUTPUT.innerHTML +=""
    OUTPUT.innerHTML += "<br> $5</br>"
    OUTPUT.innerHTML +="<br>$4</br>"
    OUTPUT.innerHTML +="<br> $4</br>"
    OUTPUT.innerHTML +="<br> $4</br>"
    OUTPUT.innerHTML +="<br> $3</br>"
    OUTPUT.innerHTML +="<br> $4</br>"
    


    for (let i = 0; i < shoppingList.length; i++) {

        OUTPUT.innerHTML += shoppingList[i] + "<br>";

    }

}

function start() {

    OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    OUTPUT.innerHTML = "";

}

