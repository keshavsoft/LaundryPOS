let ReturnQrCodeFromURLSearchParams = () => {
    let jVarLocalSearch = document.location.search;

    if (jVarLocalSearch === "") {
        return false;
    } else {
        const params = new URLSearchParams(jVarLocalSearch);

        return {
            QrCode: params.get("QrCode"),
        };

    };
};

export { ReturnQrCodeFromURLSearchParams }
