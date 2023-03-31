import logoutAPI from '../api/LogoutAPI';
import router from '../../../utils/Router';

class LogoutController {
  public logout() {
    logoutAPI
      .delete()
      .then((res) => {
        if (res.status !== 200) {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`))
      .finally(() => router.go('/'));
  }
}

export default new LogoutController();
