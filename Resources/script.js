


let gameEvents = document.getElementsByClassName("event");

let btnA-Z = document.getElementById("A-Z");
btnA-Z.addEventListener("click", function (gameEvents){
    for (let event in gameEvents) {
        let classString = gameEvents[event].className.split(" ");

    }

});


// filter events function 

function filterSelection (filter) {
    let gameEvents = document.getElementsByClassName("event");
    if (filter == "showAll") filter = "";
    for (let i = 0; i <  gameEvents.length; i++) {
        hideElements(gameEvents[i], "show");
        if (gameEvents[i].className.indexOf[filter] > -1 ) showElements(gameEvents[i], 'show');
    };
};


function hideElements (element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");

    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i] > -1)) {
            arr1.splce(arr1.indexOf(arr2[i]), 1);
        };
    };
    element.className = arr1.join(" ");
};

function showElements (element, name) {
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        };
    };
};


let btnContainer = document.getElementById("btnContainer");
let filterButtons = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        let currentActiveBtn = document.getElementsByClassName("active");
        currentActiveBtn[0].className = curent[0].className.replace(" active", "");
        this.className += " active";
    });
};