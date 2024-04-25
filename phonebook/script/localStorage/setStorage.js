import { getStorage } from "./getStorage.js";

export const setStorage = (key, obj) => {
    let newData = getStorage(key);
    newData.push(obj);
    localStorage.setItem(key, JSON.stringify(newData));
};