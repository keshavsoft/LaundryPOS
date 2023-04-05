import { QrCodeHtmlFunc } from "../Js/HtmlFuncs/FromHbs.js";
import { AddListeners } from "./QrCodeToModal.js";
import { ShowAllFuncSortDesc as DalStartFunc } from "./DalFuncs.js";

let LocalGetDateOnly = () => {
    let date = new Date();

    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    let yyyy = date.getFullYear();

    return `${dd}-${MM}-${yyyy}`;
};

let LocalFilterData = ({ inData }) => {
    let LocalToday = LocalGetDateOnly();
    let LocalDataWithDataOnlyAlso = _.map(inData, (LoopItem) => {
        LoopItem.DateOnly = LoopItem.DateTime.substring(0, 10);
        return LoopItem;
    });

    let LocalFilteredData = _.filter(LocalDataWithDataOnlyAlso, { DateOnly: LocalToday });
    //console.log("inData : ", LocalDataWithDataOnlyAlso, LocalFilteredData);
    return LocalFilteredData;
};

let QrcodeShowAll = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await QrCodeHtmlFunc();
    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await DalStartFunc();

    if (jVarLocalDataNeeded.KTF === false) {
        return await "";
    };

    let LocalFilteredData =  jVarLocalDataNeeded.JsonData;
    console.log("LocalFilteredData--",LocalFilteredData);

    let jVarLocalHtml = template(LocalFilteredData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;

    AddListeners();

    LocalSetFocusFunc();
};

let LocalSetFocusFunc = () => {
    let jVarLocalCustomerName = document.getElementById("SearchQrCodeTable");
    jVarLocalCustomerName.focus();
};

export { QrcodeShowAll };
