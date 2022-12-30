import Button from '../../components/Button';
import Block from '../../utils/Block';
import template from './ChangePassword.hbs';
import SettingsForm from '../../components/SettingsForm';
import FormFields from './containers/FormFields';
import submitForm from '../../utils/submitForm';

export default class ChangePasswordPage extends Block {
  initChildren() {
    this.children.settingsForm = new SettingsForm({
      avatarDisabled: 'disabled',
      title: 'Кирилл',
      formFields: new FormFields(),
      button: new Button({
        label: 'Сохранить',
        type: 'submit',
        class: 'user-form__button',
      }),
      events: {
        submit: submitForm,
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
