import Button from '../../components/Button';

import Link from '../../components/Link';
import Block from '../../utils/Block';
import AuthForm from '../../components/AuthForm';
import FormFields from './containers/FormFields';
import template from './Login.hbs';
import submitForm from '../../utils/submitForm';
import { CreateSessionData } from './api/LoginAPI';
import loginController from './controllers/LoginController';

import './Login.scss';

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
        href: '/sign-up',
        class: 'link',
      }),
      formFields: new FormFields(),
      events: {
        submit: (evt) => submitForm<CreateSessionData>(evt, (data) => {
          loginController.login(data);
        }),
      },
    });
  }

  render() {
    return this.compile(template, { title: 'Вход' });
  }
}
