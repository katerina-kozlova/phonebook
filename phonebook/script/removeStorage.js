'use strict';

export const removeStorage = (num) => {
    console.log(`num`, num);
    // Получить массив контактов из localStorage
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.forEach((element, index) => { // текущий элемент, индекс элемента в массиве
        // Проверить, совпадает ли номер телефона текущего контакта
        // с номером телефона, который нужно удалить
        if (element.phone === num) {
            // Удалить контакт с этим номером
            contacts.splice(index, 1);
            // Обновить массив в localStorage
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }    
    })
};
