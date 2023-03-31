import loginAPI, { CreateSessionData } from '../api/LoginAPI';
import router from '../../../utils/Router';
import userController from '../../UserSettings/controllers/UserController';

class LoginController {
  public login(data: CreateSessionData) {
    loginAPI
      .create(data)
      .then((res) => {
        if ((res.response === 'OK' && res.status === 200)
          || (res.status === 400 && JSON.parse(res.response).reason === 'User already in system')
        ) {
          router.go('/messenger');
          userController.getUser();
        } else {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`));
  }
}

export default new LoginController();
