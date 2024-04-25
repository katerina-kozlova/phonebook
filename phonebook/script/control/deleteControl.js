'use strict';

import { removeStorage } from '../removeStorage.js';

export const deleteControl = (btnDel, list) => {
    // По клику на кнопку "Удалить" показать все кнопки "х" рядом с контактами
    btnDel.addEventListener('click', () => { 
      document.querySelectorAll('.delete').forEach(del => {
        del.classList.toggle('is-visible');
      });
    });

    // Добавить обработчик клика на список контактов 
    list.addEventListener('click', (e) => {
      // Получить элемент, по которому происхожит клик
      const target = e.target;
      // Если клик происходит на "х" 
      if (target.closest('.del-icon')) {
        // Получить элемент контакта, к которому относится "х""
        const contactElement = target.closest('.contact');
        console.log(contactElement);

        // Получить номер телефона из атрибута дочернего элемента контакта
        const phoneNumber = 
          // доступ к 4 дочернему элементу.доступ к 1 элементу в 4
          contactElement.children[3].children[0].getAttribute(
            'data-phone-number'
          );

        console.log("Удалить контакт с номером:", phoneNumber);
        contactElement.remove(); // Удалить элемент контакта из DOM
        removeStorage(phoneNumber); // Удалить элемент контакта из localStorage
      }
    });
  };