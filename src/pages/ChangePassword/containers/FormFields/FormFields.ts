import Block from '../../../../utils/Block';
import Input from '../../../../components/Input';
import FormField from '../../../../components/FormField';
import template from './FormFields.hbs';
import validateField from '../../../../utils/validateField';

export default class FormFields extends Block {
  initChildren() {
    this.children.formFieldOldPassword = new FormField({
      label: 'Старый пароль',
      error: 'Неверно указан пароль',
      name: 'oldPassword',
      class: 'user-form__field',
      input: new Input({
        label: 'Старый пароль',
        type: 'password',
        name: 'oldPassword',
        class: 'user-form__field',
        regex: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$',
        events: {
          focus: validateField('Неверно указан пароль'),
          blur: validateField('Неверно указан пароль'),
        },
      }),
    });
    this.children.formFieldNewPassword = new FormField({
      label: 'Новый пароль',
      error: 'Неверно указан пароль',
      name: 'newPassword',
      class: 'user-form__field',
      input: new Input({
        label: 'Новый пароль',
        type: 'password',
        name: 'newPassword',
        class: 'user-form__field',
        regex: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$',
        events: {
          focus: validateField('Неверно указан пароль'),
          blur: validateField('Неверно указан пароль'),
        },
      }),
    });
    this.children.formFieldPasswordConfirmation = new FormField({
      label: 'Повторите пароль',
      error: 'Неверно указан пароль',
      name: 'newPassword_confirm',
      class: 'user-form__field',
      additionalClass: 'user-form__field_borderless',
      input: new Input({
        label: 'Повторите пароль',
        type: 'password',
        name: 'newPassword_confirm',
        class: 'user-form__field',
        regex: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$',
        events: {
          focus: validateField('Неверно указан пароль'),
          blur: validateField('Неверно указан пароль'),
        },
      }),
    });
  }

  render() {
    return this.compile(template, {});
  }
}
