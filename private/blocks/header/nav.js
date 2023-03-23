const nav = () => {
  const links = document.querySelectorAll('.nav__item');
  const nav = document.querySelector('.nav__list');

  function setActive(link) {
    nav.querySelector('.active-link').classList.remove('active-link');
    link.classList.add('active-link');
  }
  links.forEach((link) => link.addEventListener('click', () => setActive(link)));
};

export default nav;
