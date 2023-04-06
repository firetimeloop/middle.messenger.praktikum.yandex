import Block from '../../../../utils/Block';
import FormField from '../../../../components/FormField';
import Input from '../../../../components/Input';
import template from './FormFields.hbs';
import validateField from '../../../../utils/validateField';
import {
  withUserEmailValue,
  withUserLoginValue,
  withUserFirstNameValue,
  withUserSecondNameValue,
  withUserPhoneValue,
  withUserDisplayNameValue,
} from '../../../../utils/connect';

const InputAsBlock = Input as typeof Block;

const InputWithEmail = withUserEmailValue(InputAsBlock);
const InputWithLogin = withUserLoginValue(InputAsBlock);
const InputWithFirstName = withUserFirstNameValue(InputAsBlock);
const InputWithSecondName = withUserSecondNameValue(InputAsBlock);
const InputWithPhone = withUserPhoneValue(InputAsBlock);
const InputWithDisplayName = withUserDisplayNameValue(InputAsBlock);

export default class FormFields extends Block {
  initChildren() {
    this.children.formFieldEmail = new FormField({
      label: 'Почта',
      name: 'email',
      class: 'user-form__field',
      error: 'Неверно указан email',
      input: new InputWithEmail({
        label: 'Почта',
        type: 'email',
        name: 'email',
        class: 'user-form__field',
        regex: '^[a-zA-Z0-9-_.]+@[a-zA-Z]+.[a-zA-Z]+$',
        value: '',
        events: {
          focus: validateField('Неверно указан email'),
          blur: validateField('Неверно указан email'),
        },
      }),
    });
    this.children.formFieldLogin = new FormField({
      label: 'Логин',
      name: 'login',
      class: 'user-form__field',
      error: 'Неверно указан логин',
      input: new InputWithLogin({
        label: 'Логин',
        type: 'text',
        name: 'login',
        class: 'user-form__field',
        regex: '^[a-zA-Z_][a-zA-Z0-9-_]{2,19}$',
        events: {
          focus: validateField('Неверно указан логин'),
          blur: validateField('Неверно указан логин'),
        },
      }),
    });
    this.children.formFieldName = new FormField({
      label: 'Имя',
      name: 'first_name',
      error: 'Неверно указано имя',
      class: 'user-form__field',
      input: new InputWithFirstName({
        label: 'Имя',
        type: 'text',
        name: 'first_name',
        class: 'user-form__field',
        regex: '^[A-ZА-Я][a-zA-Zа-яА-Я-]*$',
        events: {
          focus: validateField('Неверно указано имя'),
          blur: validateField('Неверно указано имя'),
        },
      }),
    });
    this.children.formFieldSurname = new FormField({
      label: 'Фамилия',
      name: 'second_name',
      error: 'Неверно указана фамилия',
      class: 'user-form__field',
      input: new InputWithSecondName({
        label: 'Фамилия',
        type: 'text',
        name: 'second_name',
        class: 'user-form__field',
        regex: '^[A-ZА-Я][a-zA-Zа-яА-Я-]*$',
        events: {
          focus: validateField('Неверно указана фамилия'),
          blur: validateField('Неверно указана фамилия'),
        },
      }),
    });
    this.children.formFieldChatName = new FormField({
      label: 'Имя в чате',
      name: 'display_name',
      error: '',
      class: 'user-form__field',
      input: new InputWithDisplayName({
        label: 'Имя в чате',
        type: 'text',
        name: 'display_name',
        class: 'user-form__field',
      }),
    });
    this.children.formFieldPhone = new FormField({
      label: 'Телефон',
      name: 'phone',
      error: 'Неверно указан телефон',
      class: 'user-form__field',
      additionalClass: 'user-form__field_borderless',
      input: new InputWithPhone({
        label: 'Телефон',
        type: 'text',
        name: 'phone',
        class: 'user-form__field',
        regex: '^[+]?[0-9]{10,15}$',
        events: {
          focus: validateField('Неверно указан телефон'),
          blur: validateField('Неверно указан телефон'),
        },
      }),
    });
  }

  render() {
    return this.compile(template, {});
  }
}
