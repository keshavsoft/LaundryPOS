let CommonJsonFileName = "Billing.json";
let CommonDataPath = `./KData/JSON/2017/Data/Transactions/${CommonJsonFileName}`;
let CommonItemName = "Billing";

let StartFunc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalCustomersData = await Neutralino.filesystem.readFile(CommonDataPath);
    let LocalCustomersDataAsJson = JSON.parse(LocalCustomersData);

    LocalReturnObject.JsonData = LocalCustomersDataAsJson[CommonItemName];
    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};

let StartFunc_1Dec2022 = async () => {
    let LocalJsonFileName = "Billing.json";

    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    try {
        let LocalData = await Neutralino.filesystem.readFile(`./KData/JSON/2017/Data/Transactions/${LocalJsonFileName}`);
        let LocalDataAsJson = JSON.parse(LocalData);

        LocalReturnObject.JsonData = LocalDataAsJson;
        LocalReturnObject.KTF = true;
    } catch (error) {
        console.log("error dal:Billing:PullFuncs:Original : ", error);
        LocalReturnObject.KError = error;
    };

    return await LocalReturnObject;
};

export { StartFunc }