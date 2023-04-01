import signupAPI, { CreateUserData } from '../api/SignupAPI';
import router from '../../../utils/Router';

class SignupController {
  public signup(data: CreateUserData) {
    signupAPI
      .createUser(data)
      .then((res) => {
        const response = JSON.parse(res.response);
        if (res.status === 200) {
          router.go('/messenger');
          console.log(response);
        } else {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`));
  }
}

export default new SignupController();
