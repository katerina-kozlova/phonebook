'use strict';

import { createRow } from './createElemets/createRow.js';
import { getStorage } from './getStorage.js';

// Добавить контакты из имеющегося массива
export const renderContacts = (elem, data) => {
    // Получить массив контактов из localStorage
    const testStorage = getStorage('contacts');
    if (testStorage.length) {
        console.log(`Контакты из localStorage:`, testStorage);
    }

    // Объединить изначальный массив в данными из localStorage
    const newData = [...data, ...testStorage];
    console.log(`Объединенные контакты:`, newData);

    // Создать строки для каждого контакта
    const allRow = newData.map(createRow);
    elem.append(...allRow);
    return allRow;
};