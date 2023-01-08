import Button from '../../components/Button';

import Link from '../../components/Link';
import Block from '../../utils/Block';
import AuthForm from '../../components/AuthForm';
import FormFields from './containers/FormFields';
import template from './Login.hbs';
import submitForm from '../../utils/submitForm';

export default class LoginPage extends Block {
  initChildren() {
    this.children.authForm = new AuthForm({
      title: 'Вход',
      button: new Button({
        label: 'Войти',
        type: 'submit',
      }),
      link: new Link({
        label: 'Регистрация',
        href: '/signin',
        class: 'link',
      }),
      formFields: new FormFields(),
      events: {
        submit: submitForm,
      },
    });
  }

  render() {
    return this.compile(template, { title: 'Вход' });
  }
}
