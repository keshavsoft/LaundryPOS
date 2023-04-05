import { StartFunc as QrCodesCheckQrCode } from "../../../QrCodes/PullFuncs/CheckQrCode.js";
import { StartFunc as DalQrCodesAndCompleted } from "../../../Bookings/PullFuncs/QrCodesAndCompleted.js";
import { StartFunc as OriginalStartFunc } from "../Original.js";

let StartFunc = async ({ inQrCode }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
    let LocalFromStartFunc = await OriginalStartFunc();

    if (LocalFromStartFunc.KTF === false) {
        LocalReturnObject.KReason = LocalFromStartFunc.KReason;
        return await LocalReturnObject;
    };

    if (inQrCode in LocalFromStartFunc.JsonData) {
        LocalReturnObject.KReason = `${inQrCode} is already scanned!`;
        return await LocalReturnObject;
    };

    let LocalFromQrCodesCheckQrCode = await QrCodesCheckQrCode({ inQrCode });

    if (LocalFromQrCodesCheckQrCode.KTF === false) {
        LocalReturnObject.KReason = LocalFromQrCodesCheckQrCode.KReason;
        return await LocalReturnObject;
    };

    let LocalFromDalQrCodesAndCompleted = await DalQrCodesAndCompleted();

    if (LocalFromDalQrCodesAndCompleted.KTF === false) {
        LocalReturnObject.KReason = LocalFromDalQrCodesAndCompleted.KReason;
        return await LocalReturnObject;
    };

    if ((inQrCode in LocalFromDalQrCodesAndCompleted.JsonData) === false) {
        LocalReturnObject.KReason = `${inQrCode}: error inside Dal/Billing/PushFuncs/StartFunc`;
        return await LocalReturnObject;
    };

    if ((LocalFromDalQrCodesAndCompleted.JsonData[inQrCode].QrCodesInProcess === 0) === false) {
        LocalReturnObject.KReason = `${inQrCode}: completed : ${LocalFromDalQrCodesAndCompleted.JsonData[inQrCode].QrCodesCompleted}: error!`;
        return await LocalReturnObject;
    };

    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};

export { StartFunc }
