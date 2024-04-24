'use strict';

import { createContainer } from "./createContainer.js";

// Создать контейнер-мэйн и сам мэйн
export const createMain = () => {
    const main = document.createElement('main');
    const mainContainer = createContainer();

    main.append(mainContainer);
    main.mainContainer = mainContainer;

    return main;
};