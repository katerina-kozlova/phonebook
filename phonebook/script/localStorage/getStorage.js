export const getStorage = (key) => {
    const getData = localStorage.getItem(key);
    if (getData) {
      return JSON.parse(getData);
    } else {
      return [];
    }
};