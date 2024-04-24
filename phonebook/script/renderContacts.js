'use strict';

import { createRow } from './createElemets/createRow.js';

// Добавить контакты из имеющегося массива
export const renderContacts = (elem, data) => {
    const allRow = data.map(createRow);
    elem.append(...allRow);
    return allRow;
};