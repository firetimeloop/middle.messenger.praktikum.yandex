import Block from '../../../../utils/Block';
import template from './Links.hbs';
import Button from '../../../../components/Button';
import Link from '../../../../components/Link/Link';
import router from '../../../../utils/Router';

import userSettingsController from '../../controllers/UserSettingsController';

export default class Links extends Block {
  initChildren() {
    this.children.linkChangePassword = new Link({
      label: 'Изменить пароль',
      class: 'link',
      events: {
        click: (evt) => {
          evt.preventDefault();
          router.go('/user-change-password')
        },
      },
    });
    this.children.linkLogout = new Button({
      label: 'Выйти',
      type: 'button',
      class: 'link link_red',
      events: {
        click: () => userSettingsController.logout(),
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
