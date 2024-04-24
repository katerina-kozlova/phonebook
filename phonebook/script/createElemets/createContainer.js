'use strict';

// Создать контейнер для создания любой секции на странице
export const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  return container;
};
