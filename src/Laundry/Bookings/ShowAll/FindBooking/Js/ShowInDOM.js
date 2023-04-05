import { FindBookingHtmlFunc } from "./HtmlFuns/FromTemplate.js";
import { ReturnBookingPKFromURLSearchParams } from "./urlSearchParams.js";
import { ToDOMBodyAsParts } from "./FindBooking.js";

let StartFunc = async ({ inData }) => {

    // let jVarLocalFromHbs = await FindBookingHtmlFunc();
    // let jVarLocalKCont1 = document.getElementById("KCont1");
    // jVarLocalKCont1.innerHTML = jVarLocalFromHbs;

    LocalFuncCustomerDetails({
        inOrderNo: inData.OrderNo,
        inCustomerName: inData.CustomerName,
        inMobile: inData.Mobile,
        inGarmentsTotalPcs: inData.GarmentsTotalPcs,
        inWeight: inData.Weight,
        inAmount: inData.Amount,
        inKgRate: inData.KgRate
    });

    LocalShowGarments({ inGarmentDetails: inData.GarmentDetails });


};

let LocalShowGarments = ({ inGarmentDetails }) => {

    LocalGarments1({ inGarmentDetails });
    LocalGarments2({ inGarmentDetails });
    LocalGarments3({ inGarmentDetails });
    LocalGarments4({ inGarmentDetails });
    LocalGarments5({ inGarmentDetails });
    LocalGarments6({ inGarmentDetails });
    LocalGarments7({ inGarmentDetails });
    LocalGarments8({ inGarmentDetails });
    LocalGarments9({ inGarmentDetails });
    LocalGarments10({ inGarmentDetails });



    // let jVarLocalGarments1 = document.getElementById("Garments1");

    // let jVarLocalGarments2 = document.getElementById("Garments2");
    // let jVarLocalGarments3 = document.getElementById("Garments3");
    // let jVarLocalGarments4 = document.getElementById("Garments4");
    // let jVarLocalGarments5 = document.getElementById("Garments5");
    // let jVarLocalGarments6 = document.getElementById("Garments6");
    // let jVarLocalGarments7 = document.getElementById("Garments7");
    // let jVarLocalGarments8 = document.getElementById("Garments8");
    // let jVarLocalGarments9 = document.getElementById("Garments9");
    // let jVarLocalGarments10 = document.getElementById("Garments10");

    // jVarLocalGarments1.value = inGarmentDetails["1"].Name;
    // jVarLocalGarments2.value = inGarmentDetails["2"].Name;
    // jVarLocalGarments3.value = inGarmentDetails["3"].Name;
    // jVarLocalGarments4.value = inGarmentDetails["4"].Name;
    // jVarLocalGarments5.value = inGarmentDetails["5"].Name;
    // jVarLocalGarments6.value = inGarmentDetails["6"].Name;
    // jVarLocalGarments7.value = inGarmentDetails["7"].Name;
    // jVarLocalGarments8.value = inGarmentDetails["8"].Name;
    // jVarLocalGarments9.value = inGarmentDetails["9"].Name;
    // jVarLocalGarments10.value = inGarmentDetails["10"].Name;



    // let jVarLocalPcs1 = document.getElementById("Pcs1");
    // let jVarLocalPcs2 = document.getElementById("Pcs2");
    // let jVarLocalPcs3 = document.getElementById("Pcs3");
    // let jVarLocalPcs4 = document.getElementById("Pcs4");
    // let jVarLocalPcs5 = document.getElementById("Pcs5");
    // let jVarLocalPcs6 = document.getElementById("Pcs6");
    // let jVarLocalPcs7 = document.getElementById("Pcs7");
    // let jVarLocalPcs8 = document.getElementById("Pcs8");
    // let jVarLocalPcs9 = document.getElementById("Pcs9");
    // let jVarLocalPcs10 = document.getElementById("Pcs10");




    // jVarLocalPcs1.value = inGarmentDetails["1"].Pcs;
    // jVarLocalPcs2.value = inGarmentDetails["2"].Pcs;
    // jVarLocalPcs3.value = inGarmentDetails["3"].Pcs;
    // jVarLocalPcs4.value = inGarmentDetails["4"].Pcs;
    // jVarLocalPcs5.value = inGarmentDetails["5"].Pcs;
    // jVarLocalPcs6.value = inGarmentDetails["6"].Pcs;
    // jVarLocalPcs7.value = inGarmentDetails["7"].Pcs;
    // jVarLocalPcs8.value = inGarmentDetails["8"].Pcs;
    // jVarLocalPcs9.value = inGarmentDetails["9"].Pcs;
    // jVarLocalPcs10.value = inGarmentDetails["10"].Pcs;

    //jVarLocalGarments1.focus();
};

let LocalGarments1 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("1" in jVarLocalGarmentDetails) {
        let jVarLocalGarments1 = document.getElementById("Garments1");
        let jVarLocalPcs1 = document.getElementById("Pcs1");

        jVarLocalGarments1.value = jVarLocalGarmentDetails["1"].Name;
        jVarLocalPcs1.value = jVarLocalGarmentDetails["1"].Pcs;
    }
};
let LocalGarments2 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("2" in jVarLocalGarmentDetails) {
        let jVarLocalGarments2 = document.getElementById("Garments2");
        let jVarLocalPcs2 = document.getElementById("Pcs2");

        jVarLocalGarments2.value = jVarLocalGarmentDetails["2"].Name;
        jVarLocalPcs2.value = jVarLocalGarmentDetails["2"].Pcs;
    }
};

let LocalGarments3 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("3" in jVarLocalGarmentDetails) {
        let jVarLocalGarments3 = document.getElementById("Garments3");
        let jVarLocalPcs3 = document.getElementById("Pcs3");

        jVarLocalGarments3.value = jVarLocalGarmentDetails["3"].Name;
        jVarLocalPcs3.value = jVarLocalGarmentDetails["3"].Pcs;
    }
};

let LocalGarments4 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("4" in jVarLocalGarmentDetails) {
        let jVarLocalGarments4 = document.getElementById("Garments4");
        let jVarLocalPcs4 = document.getElementById("Pcs4");

        jVarLocalGarments4.value = jVarLocalGarmentDetails["4"].Name;
        jVarLocalPcs4.value = jVarLocalGarmentDetails["4"].Pcs;
    }
};

let LocalGarments5 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("5" in jVarLocalGarmentDetails) {
        let jVarLocalGarments5 = document.getElementById("Garments5");
        let jVarLocalPcs5 = document.getElementById("Pcs5");

        jVarLocalGarments5.value = jVarLocalGarmentDetails["5"].Name;
        jVarLocalPcs5.value = jVarLocalGarmentDetails["5"].Pcs;
    }
};

let LocalGarments6 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("6" in jVarLocalGarmentDetails) {
        let jVarLocalGarments6 = document.getElementById("Garments6");
        let jVarLocalPcs6 = document.getElementById("Pcs6");

        jVarLocalGarments6.value = jVarLocalGarmentDetails["6"].Name;
        jVarLocalPcs6.value = jVarLocalGarmentDetails["6"].Pcs;
    }
};

let LocalGarments7 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("7" in jVarLocalGarmentDetails) {
        let jVarLocalGarments7 = document.getElementById("Garments7");
        let jVarLocalPcs7 = document.getElementById("Pcs7");

        jVarLocalGarments7.value = jVarLocalGarmentDetails["7"].Name;
        jVarLocalPcs7.value = jVarLocalGarmentDetails["7"].Pcs;
    }
};

let LocalGarments8 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("8" in jVarLocalGarmentDetails) {
        let jVarLocalGarments8 = document.getElementById("Garments8");
        let jVarLocalPcs8 = document.getElementById("Pcs8");

        jVarLocalGarments8.value = jVarLocalGarmentDetails["8"].Name;
        jVarLocalPcs8.value = jVarLocalGarmentDetails["8"].Pcs;
    }
};

let LocalGarments9 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("9" in jVarLocalGarmentDetails) {
        let jVarLocalGarments9 = document.getElementById("Garments9");
        let jVarLocalPcs9 = document.getElementById("Pcs9");

        jVarLocalGarments9.value = jVarLocalGarmentDetails["9"].Name;
        jVarLocalPcs9.value = jVarLocalGarmentDetails["9"].Pcs;
    }
};

let LocalGarments10 = ({ inGarmentDetails }) => {
    let jVarLocalGarmentDetails = inGarmentDetails;

    if ("10" in jVarLocalGarmentDetails) {
        let jVarLocalGarments10 = document.getElementById("Garments10");
        let jVarLocalPcs10 = document.getElementById("Pcs10");

        jVarLocalGarments10.value = jVarLocalGarmentDetails["10"].Name;
        jVarLocalPcs10.value = jVarLocalGarmentDetails["10"].Pcs;
    }
};

let LocalFuncCustomerDetails = ({ inOrderNo, inCustomerName, inMobile, inGarmentsTotalPcs, inWeight, inAmount, inKgRate }) => {
    console.log("inKgRate : ", inKgRate);
    let jVarLocalOrderNo = document.getElementById("OrderNo");
    jVarLocalOrderNo.value = inOrderNo;

    let jVarLocalCustomerName = document.getElementById("CustomerName");
    if (jVarLocalCustomerName !== null) jVarLocalCustomerName.value = inCustomerName;

    let jVarLocalMobile = document.getElementById("Mobile");
    jVarLocalMobile.value = inMobile;

    let jVarLocalGarmentsTotalPcs = document.getElementById("GarmentsTotalPcs");
    jVarLocalGarmentsTotalPcs.value = inGarmentsTotalPcs;

    // let jVarLocalWeight = document.getElementById("Weight");
    // jVarLocalWeight.value = inWeight;

    // let jVarLocalAmount = document.getElementById("Amount");
    // jVarLocalAmount.value = inAmount;

    LocalShowKgRateToDom({ inKgRate });
    LocalShowlAmountToDom({ inAmount });
    LocalShowlWeightToDom({ inWeight });

};

let LocalShowKgRateToDom = ({ inKgRate }) => {
    let jVarLocalKgRateId = document.getElementById("KgRateId");
    if (jVarLocalKgRateId !== null) jVarLocalKgRateId.value = inKgRate;
};

let LocalShowlAmountToDom = ({ inAmount }) => {
    let jVarLocalAmountId = document.getElementById("AmountId");
    if (jVarLocalAmountId !== null) jVarLocalAmountId.value = inAmount;
};

let LocalShowlWeightToDom = ({ inWeight }) => { 
    let jVarLocalWeightId = document.getElementById("WeightId");
    if (jVarLocalWeightId !== null) jVarLocalWeightId.value = inWeight;
};




let FromUrlParams = async () => {
    let LocalFromReturnBookingPKFromURLSearchParams = await ReturnBookingPKFromURLSearchParams();

    await ToDOMBodyAsParts({ inBookingPK: LocalFromReturnBookingPKFromURLSearchParams.BookingPK });
};

export { StartFunc, FromUrlParams };