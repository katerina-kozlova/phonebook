'use strict';

import { createContainer } from "./createContainer.js";

// Создать контейнер-хэдер и сам хэдер
export const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerContainer = createContainer();
  header.append(headerContainer);
  header.headerContainer = headerContainer;

  return header;
};