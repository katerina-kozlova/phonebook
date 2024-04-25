import { addContactData } from '../addContactData.js';
import { addContactPage } from '../addContactPage.js';

export const formControl = (form, list, closeModal, btnAdd) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newContact = Object.fromEntries(formData);
      addContactPage(newContact, list);
      addContactData(newContact);
      form.reset();
      closeModal();
    });
};