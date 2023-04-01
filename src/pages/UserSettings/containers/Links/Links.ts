import Block from '../../../../utils/Block';
import Link from '../../../../components/Link';
import template from './Links.hbs';
import Button from '../../../../components/Button';
import userSettingsController from '../../controllers/UserSettingsController';

export default class Links extends Block {
  initChildren() {
    this.children.linkChangePassword = new Link({
      href: '/user-change-password',
      label: 'Изменить пароль',
      class: 'link',
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
