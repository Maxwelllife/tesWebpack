const account = () => {
  const parentBtn = document.querySelector('.js--account__btn-block');
  const btns = document.querySelectorAll('.js--account__btn');
  const cards = document.querySelectorAll('.js--account__card-outer-wrapper');

  function setActive(btn) {
    parentBtn.querySelector('.active-btn').classList.remove('active-btn');
    btn.classList.add('active-btn');

    const cardId = btn.textContent === 'Yearly' ? 'enterprise' : 'premium';
    const card = document.getElementById(cardId);
    card.scrollIntoView({ behavior: 'smooth' });

    const target = btn.getAttribute('data-target');
    cards.forEach((card) => {
      if (card.getAttribute('data-target') === target) {
        card.classList.add('active-card');
      } else {
        card.classList.remove('active-card');
      }
    });
  }

  btns.forEach((btn) => btn.addEventListener('click', () => setActive(btn)));
};

export default account;
