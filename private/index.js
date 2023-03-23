import 'bootstrap/dist/js/bootstrap.bundle';

import account from './blocks/account/account';
import nav from './blocks/header/nav';
import modal from './components/modal/menu';

document.addEventListener('DOMContentLoaded', () => {
  account();
  nav();
  modal();
});
