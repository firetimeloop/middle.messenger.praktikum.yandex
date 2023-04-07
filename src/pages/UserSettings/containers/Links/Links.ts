import Block from '../../../../utils/Block';
import template from './Links.hbs';
import Button from '../../../../components/Button';
import router from '../../../../utils/Router';

import userSettingsController from '../../controllers/UserSettingsController';

export default class Links extends Block {
  initChildren() {
    this.children.linkChangePassword =     new Button({
      label: 'Изменить пароль',
      type: 'button',
      class: 'link',
      events: {
        click: () => router.go('/user-change-password'),
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
