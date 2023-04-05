import { ReturnQrCodeFromURLSearchParams } from "./urlSearchParams.js";

let FromSearchParams = () => {
    let FromSearchParams = ReturnQrCodeFromURLSearchParams();

    if (FromSearchParams === false) {

    } else {
        let jVarLocalScanId = document.getElementById("ScanId");

        jVarLocalScanId.value = FromSearchParams.QrCode;
    };
};

export { FromSearchParams };