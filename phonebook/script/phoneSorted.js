'use strict';

// Отсортировать в алфавитном порядке контакты
export const phoneSorted = (arr, key) => {
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