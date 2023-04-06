import Button from '../../components/Button';
import Block from '../../utils/Block';
import template from './ChangePassword.hbs';
import SettingsForm from '../../components/SettingsForm';
import FormFields from './containers/FormFields';
import submitForm from '../../utils/submitForm';
import router from '../../utils/Router';
import { UpdatePasswordData } from './api/ChangePasswordAPI';
import changePasswordController from './controllers/ChangePasswordController';

export type UpdatePasswordDataWithConfirmation = UpdatePasswordData & {newPasswordConfirm: string}
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
        submit: (evt: Event) => submitForm<UpdatePasswordDataWithConfirmation>(evt, (data) => {
          changePasswordController.changePassword(data);
        }),
      },
    });

    this.children.backButton = new Button({
      label: '⬅',
      type: 'button',
      class: 'back-button',
      events: {
        click: () => router.go('/messenger'),
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
