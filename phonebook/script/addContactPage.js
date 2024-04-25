import { createRow } from './createElemets/createRow.js';
import { setStorage } from './localStorage/setStorage.js';

export const addContactPage = (contact, list) => {
    setStorage('contacts', contact);
    list.append(createRow(contact));
};
