'use strict';

import data from './data.js';
import { modalControl } from './control/modalControl.js';
import { deleteControl } from './control/deleteControl.js';
import { formControl } from './control/formControl.js';
import { hoverRow } from './hoverRow.js';
import { phoneSorted } from './phoneSorted.js';
import { renderContacts } from './renderContacts.js';
import { renderPhoneBook } from './renderPhoneBook.js';

// Инициализация телефонного справочника
const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  const {
    list,
    logo,
    btnAdd,
    btnDel,
    formOverlay,
    form
  } = renderPhoneBook(app, title);

  const buttonSortedForName = document.querySelector('.button-name');
  const buttonSortedForSurname = document.querySelector('.button-surname');

  buttonSortedForName.addEventListener('click', () => {
    phoneSorted(data, 'name');
    localStorage.setItem('sortBy', 'name');
    list.innerHTML = '';
    const allRow = renderContacts(list, data);
    hoverRow(allRow, logo);
  });

  buttonSortedForSurname.addEventListener('click', () => {
    phoneSorted(data, 'surname');
    localStorage.setItem('sortBy', 'surname');
    list.innerHTML = '';
    const allRow = renderContacts(list, data);
    hoverRow(allRow, logo);
  });

  const sortBy = localStorage.getItem('sortBy');
  if (sortBy) {
    phoneSorted(data, sortBy);
  }

  const allRow = renderContacts(list, data);
  const {closeModal} = modalControl(btnAdd, formOverlay);
  const number = allRow

  hoverRow(allRow, logo);
  deleteControl(btnDel, list);
  formControl(form, list, closeModal, btnAdd);
};

init('#app', 'Катя');

  //window.phoneBookInit = init;
