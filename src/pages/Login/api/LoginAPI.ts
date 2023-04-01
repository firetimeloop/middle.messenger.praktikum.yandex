import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

export type CreateSessionData = {
    login: string;
    password: string;
}

class LoginAPI extends BaseAPI {
  create(data: CreateSessionData) {
    return httpTransport.post('/auth/signin', {
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new LoginAPI();
