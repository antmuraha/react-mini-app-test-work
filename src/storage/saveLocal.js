import { getFormValues, getFormNames } from "redux-form";
import * as ls from "local-storage";

export function getDataFromsState(state) {
  let forms = getFormNames()(state);
  if (!Array.isArray(forms)) {
    return {};
  }
  let data = {};
  forms.forEach((item, index, arr) => {
    data[item] = {};
    let fields = getFormValues(item)(state);
    for (let x in fields) {
      data[item][x] = fields[x];
    }
  });
  return data;
}

export function saveDataToLocaleStorage(key, data) {
  ls.set(key, data);
}
export function removeDataLocaleStorage(key) {
  ls.remove(key);
}
export function getDataInLocaleStorage(key) {
  return ls.get(key);
}
export function isDataInLocaleStorage(key) {
  return ls(key);
}
