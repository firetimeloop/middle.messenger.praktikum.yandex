import loginAPI, { CreateSessionData } from '../api/LoginAPI';
import router from '../../../utils/Router';
import userSettingsController from '../../UserSettings/controllers/UserSettingsController';

class LoginController {
  public login(data: CreateSessionData) {
    loginAPI
      .createSession(data)
      .then((res) => {
        if ((res.status === 200)
          || (res.status === 400 && JSON.parse(res.response).reason === 'User already in system')
        ) {
          router.go('/messenger');
          userSettingsController.getUser();
        } else {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`));
  }
}

export default new LoginController();
