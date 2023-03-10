(() => {
    const refs = {
        openModalBtn: document.querySelector('.menu'),
        closeModalBtn: document.querySelector('.close'),
        modal: document.querySelector('.backdrop'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('backdrop--hidden');
    }
})();