import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

export type CreateUserData = {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    phone: string;
    password: string;
}

class SignupAPI extends BaseAPI {
  create(data: CreateUserData) {
    return httpTransport.post('/auth/signup', {
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new SignupAPI();
