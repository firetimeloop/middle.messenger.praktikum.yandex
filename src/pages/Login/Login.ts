import Button from '../../components/Button';

import Block from '../../utils/Block';
import AuthForm from '../../components/AuthForm';
import FormFields from './containers/FormFields';
import template from './Login.hbs';
import submitForm from '../../utils/submitForm';
import { CreateSessionData } from './api/LoginAPI';
import loginController from './controllers/LoginController';
import router from '../../utils/Router';

import './Login.scss';

export default class LoginPage extends Block {
  initChildren() {
    this.children.authForm = new AuthForm({
      title: 'Вход',
      button: new Button({
        label: 'Войти',
        type: 'submit',
      }),
      link: new Button({
        label: 'Регистрация',
        type: 'button',
        class: 'link',
        events: {
          click: () => router.go('/sign-up'),
        },
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
