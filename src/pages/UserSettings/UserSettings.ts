import Button from '../../components/Button';
import Block from '../../utils/Block';
import template from './UserSettings.hbs';
import SettingsForm from '../../components/SettingsForm';
import FormFields from './containers/FormFields';
import Links from './containers/Links';
import submitForm from '../../utils/submitForm';

export default class UserSettingsPage extends Block {
  initChildren() {
    this.children.settingsForm = new SettingsForm({
      title: 'Кирилл',
      formFields: new FormFields(),
      links: new Links(),
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
