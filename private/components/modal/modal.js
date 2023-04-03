const modal = () => {
  const openModalBtn = document.querySelector('.js--nav__menu');
  const closeModalBtns = document.querySelectorAll('.js--modal-menu__close');
  const modal = document.querySelector('.backdrop');

  //   function toggleModal() {
  //     // modal.classList.toggle('backdrop--hidden');
  //     modal.classList.remove('backdrop--hidden');
  //   }
  function hideModal() {
    modal.classList.add('backdrop--hidden');
  }

  function showModal() {
    modal.classList.remove('backdrop--hidden');
  }

  openModalBtn.addEventListener('click', showModal);
  // closeModalBtn.addEventListener('click', hideModal);
  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', hideModal);
  });
};
export default modal;
