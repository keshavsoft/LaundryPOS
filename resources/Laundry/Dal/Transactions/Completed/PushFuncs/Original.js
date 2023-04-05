let CommonJsonFileName = "Completed.json";
let CommonJsonPath = `./KData/JSON/2017/Data/Transactions/${CommonJsonFileName}`;
let CommonItemName = "Completed";

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

let LocalGetDate = () => {
    let date = new Date();

    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    let yyyy = date.getFullYear();
    let HH = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    return `${dd}-${MM}-${yyyy}-${HH}-${mm}-${ss}`;
};

export { StartFunc };