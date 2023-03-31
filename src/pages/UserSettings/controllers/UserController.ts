import store from '../../../utils/Store';
import userAPI from '../api/UserAPI';

class UserController {
  public getUser() {
    return userAPI
      .request()
      .then((data) => {
        store.set('user', JSON.parse(data.response));
      });
  }
}

export default new UserController();
