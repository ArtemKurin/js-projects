const app = () => {
    const buttonsShow = document.querySelectorAll('.btn')
    buttonsShow.forEach((button) => {
      const idForContent = button.dataset.target;
      const content = document.querySelector(idForContent);
      button.addEventListener('click', () => {
      content.classList.add('show');
      content.style.display = 'block';
      });
      const buttonsClose = document.querySelectorAll('.close');
      buttonsClose.forEach((buttonClose) => {
        buttonClose.addEventListener('click', () => {
          content.classList.remove('show');
          content.style.display = '';
        });
      });
    });
  };
  app();