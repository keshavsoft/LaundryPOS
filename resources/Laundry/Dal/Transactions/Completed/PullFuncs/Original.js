let CommonJsonFileName = "Completed.json";
let CommonJsonPath = `./KData/JSON/2017/Data/Transactions/${CommonJsonFileName}`;
let CommonItemName = "Completed";

let StartFunc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalData = await Neutralino.filesystem.readFile(CommonJsonPath);
    let LocalDataAsJson = JSON.parse(LocalData);

    LocalReturnObject.JsonData = LocalDataAsJson[CommonItemName];
    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};

export { StartFunc }