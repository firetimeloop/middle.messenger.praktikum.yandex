import Button from '../../components/Button';
import Link from '../../components/Link';
import Block from '../../utils/Block';
import AuthForm from '../../components/AuthForm';
import template from './Signup.hbs';
import FormFields from './containers/FormFields';
import submitForm from '../../utils/submitForm';
import { CreateUserData } from './api/SignupAPI';
import signupController from './controllers/SignupController';

export default class SigninPage extends Block {
  render() {
    return this.compile(template, {});
  }

  initChildren() {
    this.children.authForm = new AuthForm({
      title: 'Регистрация',
      button: new Button({
        label: 'Зарегистрироваться',
        type: 'submit',
      }),
      link: new Link({
        label: 'Войти',
        href: '/',
        class: 'link',
      }),
      formFields: new FormFields(),
      events: {
        submit: (evt) => submitForm<CreateUserData>(evt, (data) => (
          signupController.signup(data)
        )),
      },
    });
  }
}
