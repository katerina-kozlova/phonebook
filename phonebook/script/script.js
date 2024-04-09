'use strict';

import data from './data.js';

{
  // Создать контейнер для создания любой секции на странице
  const createContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    return container;
  };

  // Создать контейнер-хэдер и сам хэдер
  const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerContainer = createContainer();
    header.append(headerContainer);
    header.headerContainer = headerContainer;

    return header;
  };

  // Создать логотип, в названии которого имя пользователя при инициализации 
  const createLogo = (title) => {
    const h1 = document.createElement('h1');
    h1.classList.add('logo');
    h1.textContent = `Телефонный справочник. ${title}`;

    return h1;
  };

  // Создать контейнер-мэйн и сам мэйн
  const createMain = () => {
    const main = document.createElement('main');
    const mainContainer = createContainer();

    main.append(mainContainer);
    main.mainContainer = mainContainer;

    return main;
  };

  // Создать группу кнопок
  const createButtonsGroup = (params) => {
    // Создать контейнер с кнопками
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');

    // При создании новой кнопки указываются параметры:
    const btns = params.map(({className, type, text}) => {
      const button = document.createElement('button');
      button.className = className;
      button.type = type;
      button.textContent = text;

      return button;
    });

    btnWrapper.append(...btns);

    return {
      btnWrapper,
      btns,
    };
  };

  // Создать верстку таблицы и названия ячеек
  const createTable = () => {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    const thead = document.createElement('thead');
    thead.insertAdjacentHTML('beforeend', `
      <tr>
        <th class='delete'>Удалить</th>
        <th class='button-name'>Имя</th>
        <th class='button-surname'>Фамилия</th>
        <th>Номер телефона</th>
      </tr>
    `);

    const tbody = document.createElement('tbody');
    table.append(thead, tbody);
    table.tbody = tbody;

    return table;
  };

  // Создать форму и верстку формы для добьавления нового контакта пользователем
  const createForm = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('form-overlay');

    const form = document.createElement('form');
    form.classList.add('form');
    form.insertAdjacentHTML('beforeend', `
      <button class='close' type='button'></button>
      <h2 class='form-title'>Добавить контакт</h2>
      <div class='form-group'>
        <label class='form-label' for='name'>Имя:</label>
        <input class='form-input' name='name' id='name' type='text' required>
      </div>
      <div class='form-group'>
        <label class='form-label' for='surname'>Фамилия:</label>
        <input class='form-input' name='surname' id='surname' type='text' required>
      </div>
      <div class='form-group'>
        <label class='form-label' for='phone'>Телефон:</label>
        <input class='form-input' name='phone' id='phone' type='number' required>
      </div>
    `);

    const buttonGroup = createButtonsGroup([
      {
        className: 'btn btn-primary mr-3',
        type: 'submit',
        text: 'Добавить',
      },
      {
        className: 'btn btn-danger',
        type: 'reset',
        text: 'Отмена',
      },
    ]);

    form.append(...buttonGroup.btns);
    overlay.append(form);

    return {
      overlay,
      form,
    };
  };

  // Создать контейнер-футер
  const createFooter = () => {
    const footer = document.createElement('footer');
    const footerContainer = createContainer();

    footer.append(footerContainer);
    footer.footerContainer = footerContainer;

    footer.classList.add('footer');
    footer.textContent = 'Все права защищены';

    return footer;
  };

  // Создать страницу; вызвать функции, создающие элементы
  const renderPhoneBook = (app, title) => {
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
    const form = createForm();

    header.headerContainer.append(logo);
    main.mainContainer.append(buttonGroup.btnWrapper, table, form.overlay);
    app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: form.overlay,
    form: form.form,
  };
  };

  // Создать строки контактов в таблице
  const createRow = ({name: firstName, surname, phone}) => {
    const tr = document.createElement('tr');
    tr.classList.add('contact');

    const tdEdit = document.createElement('button');
    tdEdit.style.cssText = `
      padding: 0;
      border: 0;
      background: transparent
    `;
    tdEdit.textContent = 'Редактировать';

    const tdDel = document.createElement('td');
    tdDel.classList.add('delete');

    const buttonDel = document.createElement('button');
    buttonDel.classList.add('del-icon');
    tdDel.append(buttonDel);

    const tdName = document.createElement('td');
    tdName.textContent = firstName;
    tdName.classList.add('firstName');

    const tdSurname = document.createElement('td');
    tdSurname.textContent = surname;
    tdSurname.classList.add('surname');

    const tdPhone = document.createElement('td');
    const phoneLink = document.createElement('a');
    phoneLink.href = `tel:${phone}`;
    phoneLink.textContent = phone;
    tr.phoneLink = phoneLink;
    tdPhone.append(phoneLink);

    tr.append(tdDel, tdName, tdSurname, tdPhone, tdEdit);

    return tr;
  };

  // Добавить контакты из имеющегося массива
  const renderContacts = (elem, data) => {
    const allRow = data.map(createRow);
    elem.append(...allRow);
    return allRow;
  };

  // Показать телефон контакта при наведении мыши
  const hoverRow = (allRow, logo) => {
    const text = logo.textContent;
    allRow.forEach(contact => {
      contact.addEventListener('mouseenter', () => {
        logo.textContent = contact.phoneLink.textContent;
      });
      contact.addEventListener('mouseleave', () => {
        logo.textContent = text;
      });
    });
  };

  // Отсортировать в алфавитном порядке контакты
  const phoneSorted = (arr, key) => {
    arr.sort((a, b) => {
      if (a[key].toLowerCase() < b[key].toLowerCase()) {
        return -1;
      }
      if (a[key].toLowerCase() > b[key].toLowerCase()) {
        return 1;
      }
      return 0;
    });
  };

  // Инициализация телефонного справочника
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const phoneBook = renderPhoneBook(app, title);
    const {
      list,
      logo,
      btnAdd,
      btnDel,
      formOverlay
      //form
    } = phoneBook;

    const buttonSortedForName = document.querySelector('.button-name');
    const buttonSortedForSurname = document.querySelector('.button-surname');

    buttonSortedForName.addEventListener('click', () => {
      phoneSorted(data, 'name');
      list.innerHTML = '';
      const allRow = renderContacts(list, data);
      hoverRow(allRow, logo);
    });

    buttonSortedForSurname.addEventListener('click', () => {
      phoneSorted(data, 'surname');
      list.innerHTML = '';
      const allRow = renderContacts(list, data);
      hoverRow(allRow, logo);
    });

    const allRow = renderContacts(list, data);
    hoverRow(allRow, logo);

    btnAdd.addEventListener('click', () => {
      formOverlay.classList.add('is-visible');
    });

    formOverlay.addEventListener('click', (e) => {
      const target = e.target;
      if (target == formOverlay ||
          target.classList.contains('close')) {
        formOverlay.classList.remove('is-visible');
      }
    });

    btnDel.addEventListener('click', () => {
      document.querySelectorAll('.delete').forEach(del => {
        del.classList.toggle('is-visible');
      });
    });

    list.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.del-icon')) {
        target.closest('.contact').remove();
      }
    });

    // setTimeout(() => {
    //   const contact = createRow({
    //     name: 'Катя'б,
    //     surname: 'Козлова',
    //     phone: '12345678',
    //   });
    //   list.append(contact);
    // }, 2000);
  };

  window.phoneBookInit = init;
}