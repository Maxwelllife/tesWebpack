import 'bootstrap/dist/js/bootstrap.bundle';

import nav from './blocks/header/nav';
// import carousel from './blocks/clients/carousel';
import account from './blocks/account/account';
import modal from './components/modal/menu';

document.addEventListener('DOMContentLoaded', () => {
  nav();
  // carousel();
  account();
  modal();
});
