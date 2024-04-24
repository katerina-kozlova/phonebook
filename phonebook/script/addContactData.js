'use strict';

import data from './data.js';
//import { setStorage } from './setStorage.js';

export const addContactData = (contact) => {
    //setStorage('contacts', contact);
    data.push(contact);
};