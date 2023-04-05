let CommonJsonFileName = "Billing.json";
let CommonJsonPath = `./KData/JSON/2017/Data/Transactions/${CommonJsonFileName}`;
let CommonItemName = "Billing";

let StartFunc = async ({ inDataToSave = {}, inQrCode }) => {
    let inObjectToInsert = inDataToSave

    let LocalReturnObject = { KTF: false, KResult: "" };

    let LocalCustomersData = await Neutralino.filesystem.readFile(CommonJsonPath);

    let LocalCustomersDataAsJson = JSON.parse(LocalCustomersData);
    console.log("inObjectToInsert : ", inObjectToInsert);

    LocalCustomersDataAsJson[CommonItemName][inQrCode] = inObjectToInsert;

    let LocalFromWriteFile = await Neutralino.filesystem.writeFile(CommonJsonPath, JSON.stringify(LocalCustomersDataAsJson));

    if (LocalFromWriteFile.success) {
        LocalReturnObject.KTF = true;
    };

    return await LocalReturnObject;
};

export { StartFunc };