import Button from '../../components/Button';
import Link from '../../components/Link';
import Block from '../../utils/Block';
import AuthForm from '../../components/AuthForm';
import template from './Signin.hbs';
import FormFields from './containers/FormFields';
import submitForm from '../../utils/submitForm';

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
        href: '/login',
        class: 'link',
      }),
      formFields: new FormFields(),
      events: {
        submit: submitForm,
      },
    });
  }
}
