export const modalControl = (btnAdd, formOverlay) => {
    const openModal = () => {
      formOverlay.classList.add('is-visible');
    };

    const closeModal = () => {
      formOverlay.classList.remove('is-visible');
    };

    btnAdd.addEventListener('click', openModal);

    formOverlay.addEventListener('click', (e) => {
      const target = e.target;
      if (target == formOverlay ||
          target.classList.contains('close')) {
        closeModal();
      }
    });

    return {
      closeModal,
    };
};

// export const openModal = () => {
//   formOverlay.classList.add('is-visible');
// };

// export const closeModal = () => {
//   formOverlay.classList.remove('is-visible');
// };

// export const handleOverlayClose = (evt) => { 
//   if (evt.target === evt.currentTarget) { 
//       const popupOpened = document.querySelector('.active'); 
//       closeModal(popupOpened); 
//   } 
// };