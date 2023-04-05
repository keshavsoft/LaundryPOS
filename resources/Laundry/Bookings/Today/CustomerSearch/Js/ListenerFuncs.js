let AddlistenersFunc = () => {
    let jVarLocalGoButtonid = document.getElementById("GoButtonid");
    let jVarLocalScanId = document.getElementById("ScanId");
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

    jVarLocalScanId.addEventListener("keypress", (event) => {
        if (event.key === 'Enter') { // key code of the keybord key
            event.preventDefault();
            // your code to Run
            GoButtonClick();
        };
    });

    // jVarLocalGoButtonid.addEventListener('click', () => {
    //     let jVarInsideScanValue = jVarLocalScanId.value;

    //     var hasTest = jVarInsideScanValue.includes("/");
    //     console.log("hasTest : ", hasTest);
    //     if (hasTest) {
    //         document.location = `../../../Completed/Scan/Scan.html?QrCode=${jVarInsideScanValue}`;
    //     } else {
    //         let jVarLocalScanAsArray = jVarInsideScanValue.split(":");
    //         let jVarLocalMobile = jVarLocalScanAsArray[0];
    //         let jVarLocalName = jVarLocalScanAsArray[1];

    //         document.location = `../Insert/Insert.html?MobileNumber=${jVarLocalMobile}&CustomerName=${jVarLocalName}`;
    //     };
    // });

    jVarLocalGoButtonid.addEventListener('click', GoButtonClick);
};

// let GoButtonClick = () => {
//     let jVarLocalScanId = document.getElementById("ScanId");
//     let jVarInsideScanValue = jVarLocalScanId.value;

//     var hasTest = jVarInsideScanValue.includes("/");

//     if (hasTest) {
//         document.location = `../../../Completed/Scan/Scan.html?QrCode=${jVarInsideScanValue}`;
//     } else {
//         let jVarLocalScanAsArray = jVarInsideScanValue.split(":");
//         let jVarLocalMobile = jVarLocalScanAsArray[0];
//         let jVarLocalName = jVarLocalScanAsArray[1];

//         document.location = `../Insert/Insert.html?MobileNumber=${jVarLocalMobile}&CustomerName=${jVarLocalName}`;
//     };
// };

let GoButtonClick = () => {
    let jVarLocalScanId = document.getElementById("ScanId");

    NavigateToDom({ inScanValue: jVarLocalScanId.value });
};

let NavigateToDom = ({ inScanValue }) => {
    let jVarInsideScanValue = inScanValue;

    var hasTest = jVarInsideScanValue.includes("/");

    if (hasTest) {
        document.location = `../../../Completed/Scan/Scan.html?QrCode=${jVarInsideScanValue}`;
    } else {
        let jVarLocalScanAsArray = jVarInsideScanValue.split(":");
        let jVarLocalMobile = jVarLocalScanAsArray[0];
        let jVarLocalName = jVarLocalScanAsArray[1];

        document.location = `../Insert/Insert.html?MobileNumber=${jVarLocalMobile}&CustomerName=${jVarLocalName}`;
    };
};


export { AddlistenersFunc }
