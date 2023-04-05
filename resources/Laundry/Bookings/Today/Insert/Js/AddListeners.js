import { BookingSaveFunc } from "./SaveFuncs.js";

let LocalAddKeyPressToVertial = () => {
    let jVarLocalFormVertical = document.getElementById("FormVertical");
    let jVarLocalFormElements = jVarLocalFormVertical.querySelectorAll("input");

    for (let i = 0; i < jVarLocalFormElements.length; i++) {
        jVarLocalFormElements[i].addEventListener("keypress", async (event) => {
            if (event.keyCode === 13) { // key code of the keybord key
                await BookingSaveFunc();
                // your code to Run
            }
        });
    };
};

let LocalAddKeyPressToGarments = () => {
    let jVarLocalFormForGarments = document.getElementById("FormForGarments");
    let jVarLocalGarmentElements = jVarLocalFormForGarments.querySelectorAll("input");

    for (let i = 0; i < jVarLocalGarmentElements.length; i++) {
        jVarLocalGarmentElements[i].addEventListener("keypress", async (event) => {
            if (event.keyCode === 13) { // key code of the keybord key
                await BookingSaveFunc();
                // your code to Run
            }
        });
    };
};


let LocalAmountCalculate = () => {
    let jVarLocalWeight = document.getElementById("Weight");
    let jVarLocalKgRate = document.getElementById("KgRate");
    let jVarLocalAmount = document.getElementById("Amount");

    jVarLocalAmount.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            jVarLocalAmount.value = jVarLocalWeight.value * jVarLocalKgRate.value;
        }
    });
};

let AddListenersFunc = () => {
    let jVarLocalBookingSaveButtonId = document.getElementById("BookingSaveButtonId");
    LocalAmountCalculate();
    // LocalAddKeyPressToVertial();
    // LocalAddKeyPressToGarments();

    jVarLocalBookingSaveButtonId.addEventListener("click", BookingSaveFunc);
};


export { AddListenersFunc }
//AddListenersFunc();