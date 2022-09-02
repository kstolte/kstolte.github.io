import { apiRequestExternal } from "./util.js";

const endpoint = `${process.env.REACT_APP_SHEETS_ENDPOINT}?tabId=${process.env.REACT_APP_SHEETS_TAB_ID}`;

function submit(data) {
  return apiRequestExternal(endpoint, "POST", [
    [data.name, data.email, data.message],
  ]);
}

const contact = { submit };

export default contact;
