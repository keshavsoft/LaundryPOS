import { ReturnMobileNumberAndNameFromURLSearchParams } from "./urlSearchParams.js";

let FromSearchParams = () => {
    let FromSearchParams = ReturnMobileNumberAndNameFromURLSearchParams();

    if (FromSearchParams === false) {

    } else {
        let jVarLocalMobile = document.getElementById("Mobile");
        let jVarLocalCustomerName = document.getElementById("CustomerName");

        jVarLocalMobile.value = parseInt(FromSearchParams.MobileNumber);
        jVarLocalCustomerName.value = FromSearchParams.CustomerName;

        let jVarLocalGarments1 = document.getElementById("Garments1");
        jVarLocalGarments1.focus();
    };
};

export { FromSearchParams };