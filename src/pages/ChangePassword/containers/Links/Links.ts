import Block from '../../../../utils/Block';
import Link from '../../../../components/Link';
import template from './Links.hbs';

export default class Links extends Block {
  initChildren() {
    this.children.linkChangeData = new Link({
      href: '#',
      label: 'Изменить данные',
      class: 'link',
    });
    this.children.linkChangePassword = new Link({
      href: '/user-change-password',
      label: 'Изменить пароль',
      class: 'link',
    });
    this.children.linkLogout = new Link({
      href: '#',
      label: 'Выйти',
      class: 'link link_red',
    });
  }

  render() {
    return this.compile(template, {});
  }
}
