import { createHeader } from './createElemets/createHeader.js';
import { createLogo } from './createElemets/createLogo.js';
import { createMain } from './createElemets/createMain.js';
import { createFooter } from './createElemets/createFooter.js';
import { createTable } from './createElemets/createTable.js';
import { createForm } from './createElemets/createForm.js';
import { createButtonsGroup } from './createElemets/createButtonsGroup.js';

// Создать страницу; вызвать функции, создающие элементы
export const renderPhoneBook = (app, title) => {
    const header = createHeader();
    const logo = createLogo(title);
    const main = createMain();
    const footer = createFooter();
    const buttonGroup = createButtonsGroup([
      {
        className: 'btn btn-primary mr-3',
        type: 'button',
        text: 'Добавить',
      },
      {
        className: 'btn btn-danger',
        type: 'button',
        text: 'Удалить',
      },
    ]);
    const table = createTable();
    const {form, overlay} = createForm();

    header.headerContainer.append(logo);
    main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
    app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
  };