const nav = () => {
  const links = document.querySelectorAll('.js--nav__item');
  const nav = document.querySelector('.js--nav__list');

  function setActive(link) {
    nav.querySelector('.js--active-link').classList.remove('js--active-link');
    link.classList.add('js--active-link');
  }
  links.forEach((link) => link.addEventListener('click', () => setActive(link)));
};

export default nav;
