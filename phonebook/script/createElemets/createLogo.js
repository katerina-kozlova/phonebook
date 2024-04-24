'use strict';

// Создать логотип, в названии которого имя пользователя при инициализации 
export const createLogo = (title) => {
    const h1 = document.createElement('h1');
    h1.classList.add('logo');
    h1.textContent = `Телефонный справочник. ${title}`;

    return h1;
};