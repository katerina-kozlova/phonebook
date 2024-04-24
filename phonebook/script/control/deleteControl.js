'use strict';

import { removeStorage } from '../removeStorage.js';

export const deleteControl = (btnDel, list) => {
    btnDel.addEventListener('click', () => {
      document.querySelectorAll('.delete').forEach(del => {
        del.classList.toggle('is-visible');
      });
    });

    list.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.del-icon')) {
        const contactElement = target.closest('.contact');

        console.log(contactElement);

        const phoneNumber = contactElement.dataset.phoneNumber;

        console.log("Удалить контакт с номером:", phoneNumber);

        contactElement.remove();
        removeStorage(phoneNumber);
      }
    });
  };