let ReturnMobileNumberAndNameFromURLSearchParams = () => {
    let jVarLocalSearch = document.location.search;

    if (jVarLocalSearch === "") {
        return false;
    } else {
        const params = new URLSearchParams(jVarLocalSearch);
        console.log("params : ", params, jVarLocalSearch);

        return {
            MobileNumber: params.get("MobileNumber"),
            CustomerName: params.get("CustomerName")
        };

    };
};

export { ReturnMobileNumberAndNameFromURLSearchParams }
