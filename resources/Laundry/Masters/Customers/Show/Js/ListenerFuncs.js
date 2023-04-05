let AddlistenersFunc = () => {
    let jVarLocalMainHeaderSearchId = document.getElementById("MainHeaderSearchId");

    jVarLocalMainHeaderSearchId.addEventListener("keypress", (event) => {
        let jVarLocalCurrentTarget = event.currentTarget;

        if (event.key === 'Enter') { // key code of the keybord key
            event.preventDefault();
            // your code to Run
            //GoButtonClick();

            NavigateToDom({ inScanValue: jVarLocalCurrentTarget.value });
        };
    });
};

let NavigateToDom = ({ inScanValue }) => {
    let jVarInsideScanValue = inScanValue;

    var hasTest = jVarInsideScanValue.includes("/");

    if (hasTest) {
        //        document.location = `../../../Completed/Scan/Scan.html?QrCode=${jVarInsideScanValue}`;

        document.location = `/Laundry/Completed/Scan/Scan.html?QrCode=${jVarInsideScanValue}`;

    } else {
        let jVarLocalScanAsArray = jVarInsideScanValue.split(":");
        let jVarLocalMobile = jVarLocalScanAsArray[0];
        let jVarLocalName = jVarLocalScanAsArray[1];

        //document.location = `../Insert/Insert.html?MobileNumber=${jVarLocalMobile}&CustomerName=${jVarLocalName}`;

        document.location = `/Laundry/Bookings/Today/Insert/Insert.html?MobileNumber=${jVarLocalMobile}&CustomerName=${jVarLocalName}`;

        // http://localhost:62164/Laundry/Bookings/Today/Insert/Insert.html

    };
};

export { AddlistenersFunc }
