'use strict';

export const removeStorage = (num) => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const newContacts = contacts.filter(contact => contact.phone !== num);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
};
