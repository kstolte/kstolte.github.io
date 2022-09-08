import { apiRequestExternal } from './util.js';

const endpoint = `${process.env.NEXT_PUBLIC_SHEETS_ENDPOINT}?tabId=${process.env.NEXT_PUBLIC_SHEETS_TAB_ID}`;

function submit(data) {
  return apiRequestExternal(endpoint, 'POST', [
    [data.name, data.email, data.message],
  ]);
}

const contact = { submit };

export default contact;
