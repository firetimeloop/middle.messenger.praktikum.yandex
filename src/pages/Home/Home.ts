import Link from '../../components/Link';
import Block from '../../utils/Block';
import template from './Home.hbs';

export default class HomePage extends Block {
  initChildren() {
    this.children.linkAuth = new Link({
      label: 'Авторизация',
      href: '/login',
      class: 'link',
    });
    this.children.linkSignIn = new Link({
      label: 'Регистрация',
      href: '/signin',
      class: 'link',
    });
    this.children.linkChats = new Link({
      label: 'Чаты',
      href: '/chats',
      class: 'link',
    });
    this.children.linkSettings = new Link({
      label: 'Настройки пользователя',
      href: '/user-settings',
      class: 'link',
    });
    this.children.linkChangePassword = new Link({
      label: 'Смена пароля',
      href: '/user-change-password',
      class: 'link',
    });
    this.children.linkError404 = new Link({
      label: 'Ошибка 404',
      href: '/error-404',
      class: 'link',
    });
    this.children.linkError500 = new Link({
      label: 'Ошибка 500',
      href: '/error-500',
      class: 'link',
    });
  }

  render() {
    return this.compile(template, {});
  }
}
