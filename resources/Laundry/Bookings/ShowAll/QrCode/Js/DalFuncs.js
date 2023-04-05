import { StartFunc } from "../../../../Dal/Transactions/Bookings/PullFuncs/WithQrCodes.js";

let ShowAllFunc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalDataFromJson = await StartFunc();
    let LocalSNo = 1;

    Object.entries(LocalDataFromJson.JsonData).forEach(
        ([key, value]) => {
            LocalReturnObject.JsonData[key] = value;
            LocalReturnObject.JsonData[key].SNo = LocalSNo;
            LocalSNo += 1;
        }
    );

    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};

let ShowAllFuncSortDesc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalDataFromJson = await StartFunc();
    let LocalSNo = 1;
    let LocalKeys = Object.keys(LocalDataFromJson.JsonData);
    let LocalKeysAsNumbers = toNumbers(LocalKeys);
    let dscN = LocalKeysAsNumbers.sort((f, s) => s - f);

    LocalReturnObject.JsonData = dscN.map((element, LoopIndex) => {
        return {
            SNo: LoopIndex + 1,
            qrcode: element,
            ...LocalDataFromJson.JsonData[element]
        }
        return LocalDataFromJson.JsonData[element];
    });


    // dscN.forEach(element => {
    //     // let LocalNewObject = {};
    //     // LocalNewObject[element.toString()] = LocalDataFromJson.JsonData[element];

    //     // Object.assign(LocalReturnObject.JsonData, LocalNewObject);


    //     LocalReturnObject.JsonData[element.toString()] = LocalDataFromJson.JsonData[element];

    //     console.log('llllllll : ', element, LocalReturnObject.JsonData, LocalDataFromJson.JsonData[element]);

    //     //LocalReturnObject.JsonData[element].SNo = LocalSNo;
    //     LocalSNo += 1;
    // });

    // Object.entries(LocalDataFromJson.JsonData).forEach(
    //     ([key, value]) => {
    //         LocalReturnObject.JsonData[key] = value;
    //         LocalReturnObject.JsonData[key].SNo = LocalSNo;
    //         LocalSNo += 1;
    //     }
    // );

    LocalReturnObject.KTF = true;
    console.log('LocalReturnObject : ', LocalReturnObject);
    return await LocalReturnObject;
};


const toNumbers = arr => arr.map(Number);


export { ShowAllFunc, ShowAllFuncSortDesc }