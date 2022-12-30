import Block from '../../../../utils/Block';
import FormField from '../../../../components/FormField';
import Input from '../../../../components/Input';
import template from './FormFields.hbs';
import validateField from '../../../../utils/validateField';

export default class FormFields extends Block {
  initChildren() {
    this.children.formFieldLogin = new FormField({
      label: 'Логин',
      error: 'Невалидный логин',
      name: 'login',
      class: 'auth-form__field',
      input: new Input({
        label: 'Логин',
        type: 'text',
        name: 'login',
        class: 'auth-form__field',
        regex: '^[a-zA-Z_][a-zA-Z0-9-_]{2,19}$',
        events: {
          focus: validateField,
          blur: validateField,
        },
      }),
    });
    this.children.formFieldPassword = new FormField({
      label: 'Пароль',
      error: 'Невалидный пароль',
      name: 'password',
      class: 'auth-form__field',
      input: new Input({
        label: 'Пароль',
        type: 'password',
        name: 'password',
        class: 'auth-form__field',
        regex: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$',
        events: {
          focus: validateField,
          blur: validateField,
        },
      }),
    });
  }

  render() {
    return this.compile(template, {});
  }
}
