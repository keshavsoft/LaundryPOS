import { AddListeners } from "./ListenersFuncs.js";

let ScanHeaderId = (inEvent) => {
    console.log("ssssssss", inEvent);
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    // let jVarInsideTemplate = await ScanHtmlFunc();
    // let jVarLocalKCont1 = document.getElementById("KCont1");
    // jVarLocalKCont1.innerHTML = jVarInsideTemplate;
    LocalSetFocusFunc();
    //AddListeners();
};

let LocalSetFocusFunc = () => {
    let jVarLocalScanId = document.getElementById("ScanId");
    jVarLocalScanId.focus();
};

export { ScanHeaderId };
