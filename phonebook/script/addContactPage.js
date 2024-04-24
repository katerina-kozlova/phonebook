'use strict';

import { createRow } from './createElemets/createRow.js';
import { setStorage } from './setStorage.js';

export const addContactPage = (contact, list) => {
    setStorage('contacts', contact);
    list.append(createRow(contact));
};
