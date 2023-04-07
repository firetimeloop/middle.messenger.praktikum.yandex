import Link from '../../components/Link';
import Button from '../../components/Button';
import Block from '../../utils/Block';
import router from '../../utils/Router';

import template from './Home.hbs';

import './Home.scss';

export default class HomePage extends Block {
  initChildren() {
    this.children.linkAuth = new Link({
      label: 'Авторизация',
      href: '/',
      class: 'link',
    });
    this.children.linkSignIn = new Button({
      label: 'Регистрация',
      type: 'button',
      class: 'link',
      events: {
        click: () => router.go('/sign-up'),
      },
    });
    this.children.linkChats = new Link({
      label: 'Чаты',
      href: '/messenger',
      class: 'link',
    });
    this.children.linkSettings = new Link({
      label: 'Настройки пользователя',
      href: '/settings',
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
