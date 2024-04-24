'use strict';

import { createButtonsGroup } from "./createButtonsGroup.js";

// Создать форму и верстку формы для добьавления нового контакта пользователем
export const createForm = () => {
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