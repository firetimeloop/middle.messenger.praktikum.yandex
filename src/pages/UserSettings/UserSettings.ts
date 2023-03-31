import Button from '../../components/Button';
import Block from '../../utils/Block';
import template from './UserSettings.hbs';
import SettingsForm from '../../components/SettingsForm';
import FormFields from './containers/FormFields';
import Links from './containers/Links';
import submitForm from '../../utils/submitForm';
import router from '../../utils/Router';
import userController from './controllers/UserController';
import profileController, { ProfileDataWithAvatar } from './controllers/ProfileController';
import profileAvatarController from './controllers/ProfileAvatarController';
import { withUserAvatar } from '../../utils/connect';

const SettingsFormWithAvatar = withUserAvatar(SettingsForm as typeof Block);
export default class UserSettingsPage extends Block {
  constructor() {
    super();
    userController.getUser();
  }

  initChildren() {
    this.children.settingsForm = new SettingsFormWithAvatar({
      formFields: new FormFields(),
      links: new Links(),
      button: new Button({
        label: 'Сохранить',
        type: 'submit',
        class: 'user-form__button',
      }),
      events: {
        submit: (evt: Event) => submitForm<ProfileDataWithAvatar>(evt, (data) => {
          profileController.changeProfileData(data);
          profileAvatarController.changeAvatar(data);
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
