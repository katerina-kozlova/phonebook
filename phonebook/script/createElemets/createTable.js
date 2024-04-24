'use strict';

// Создать верстку таблицы и названия ячеек
export const createTable = () => {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    const thead = document.createElement('thead');
    thead.insertAdjacentHTML('beforeend', `
      <tr>
        <th class='delete'>Удалить</th>
        <th class='button-name'>Имя</th>
        <th class='button-surname'>Фамилия</th>
        <th>Номер телефона</th>
        <th></th>
      </tr>
    `);

    const tbody = document.createElement('tbody');
    table.append(thead, tbody);
    table.tbody = tbody;

    return table;
};