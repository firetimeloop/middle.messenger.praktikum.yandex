import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

export type CreateSessionData = {
    login: string;
    password: string;
}

class UserAPI extends BaseAPI {
  request() {
    return httpTransport.get('/auth/user', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new UserAPI();
