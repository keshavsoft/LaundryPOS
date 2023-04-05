let ReturnBookingPKFromURLSearchParams = () => {
    let jVarLocalSearch = document.location.search;

    if (jVarLocalSearch === "") {
        return false;
    } else {
        const params = new URLSearchParams(jVarLocalSearch);
        console.log("params : ", params, jVarLocalSearch);

        return {
            BookingPK: params.get("BookingPK"),
        };

    };
};

export { ReturnBookingPKFromURLSearchParams }
