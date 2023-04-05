import { StartFunc as PullFuncsStartFunc } from "../PullFuncs/Original.js";

let StartFunc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "" };

    try {
        //let LocalJsonFileName = "Bookings.json";

        // let LocalCustomersData = await Neutralino.filesystem.readFile(`./KData/JSON/2017/Data/Transactions/${LocalJsonFileName}`);
        // console.log("LocalCustomersData : ", LocalCustomersData);
        // let LocalCustomersDataAsJson = JSON.parse(LocalCustomersData);

        let LocalFromPull = await PullFuncsStartFunc();

        if (LocalFromPull.KTF === false) {
            LocalReturnObject.KReason = LocalFromPull.KReason;
            return await LocalReturnObject;
        };

        //console.log("LocalCustomersDataAsJson ---------- : ", LocalFromPull.JsonData);
        
        let LocalKeys = Object.keys(LocalFromPull.JsonData);
        let LocalLastKey = LocalKeys[LocalKeys.length - 1];

        LocalReturnObject.KTF = true;
        LocalReturnObject.LastPk = parseInt(LocalLastKey);
    } catch (error) {
        console.log("error InsertFunc : ", error);
    };

    return await LocalReturnObject;
};

export { StartFunc };