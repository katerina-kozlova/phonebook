'use strict';

// Создать группу кнопок
export const createButtonsGroup = (params) => {
    // Создать контейнер с кнопками
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');

    // При создании новой кнопки указываются параметры:
    const btns = params.map(({className, type, text}) => {
      const button = document.createElement('button');
      button.className = className;
      button.type = type;
      button.textContent = text;

      return button;
    });

    btnWrapper.append(...btns);

    return {
      btnWrapper,
      btns,
    };
};