'use strict';

import { createContainer } from "./createContainer.js";

// Создать контейнер-футер
export const createFooter = () => {
    const footer = document.createElement('footer');
    const footerContainer = createContainer();

    footer.append(footerContainer);
    footer.footerContainer = footerContainer;

    footer.classList.add('footer');
    footer.textContent = 'Все права защищены';

    return footer;
};