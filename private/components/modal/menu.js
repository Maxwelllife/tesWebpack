const modal = () => {
  const refs = {
    openModalBtn: document.querySelector('.menu'),
    closeModalBtn: document.querySelector('.close'),
    modal: document.querySelector('.backdrop'),
  };
  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
};
export default modal;
