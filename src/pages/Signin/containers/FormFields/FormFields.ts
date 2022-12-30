import Block from '../../../../utils/Block';
import FormField from '../../../../components/FormField';
import Input from '../../../../components/Input';
import template from './FormFields.hbs';
import validateField from '../../../../utils/validateField';

export default class FormFields extends Block {
  initChildren() {
    this.children.formFieldEmail = new FormField({
      label: 'Почта',
      error: 'Неверно указан email',
      name: 'email',
      class: 'auth-form__field',
      input: new Input({
        label: 'Почта',
        type: 'text',
        name: 'email',
        class: 'auth-form__field',
        regex: '^[a-zA-Z0-9-_.]+@[a-zA-Z]+.[a-zA-Z]+$',
        events: {
          focus: validateField,
          blur: validateField,
        },
      }),
    });
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
    this.children.formFieldName = new FormField({
      label: 'Имя',
      error: 'Неверно указано имя',
      name: 'first_name',
      class: 'auth-form__field',
      input: new Input({
        label: 'Имя',
        type: 'text',
        name: 'first_name',
        class: 'auth-form__field',
        regex: '^[A-ZА-Я][a-zA-Zа-яА-Я-]*$',
        events: {
          focus: validateField,
          blur: validateField,
        },
      }),
    });
    this.children.formFieldSurname = new FormField({
      label: 'Фамилия',
      error: 'Неверно указана фамилия',
      name: 'second_name',
      class: 'auth-form__field',
      input: new Input({
        label: 'Фамилия',
        type: 'text',
        name: 'second_name',
        class: 'auth-form__field',
        regex: '^[A-ZА-Я][a-zA-Zа-яА-Я-]*$',
        events: {
          focus: validateField,
          blur: validateField,
        },
      }),
    });
    this.children.formFieldPhone = new FormField({
      label: 'Телефон',
      error: 'Неверно указан телефон',
      name: 'phone',
      class: 'auth-form__field',
      input: new Input({
        label: 'Телефон',
        type: 'text',
        name: 'phone',
        class: 'auth-form__field',
        regex: '^[+]?[0-9]{10,15}$',
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
    this.children.formFieldPasswordConfirmation = new FormField({
      label: 'Пароль (ещё раз)',
      error: 'Невалидный пароль',
      name: 'password_confirm',
      class: 'auth-form__field',
      input: new Input({
        label: 'Пароль (ещё раз)',
        type: 'password',
        name: 'password_confirm',
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
