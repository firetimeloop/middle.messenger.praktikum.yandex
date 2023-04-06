import httpTransport from '../../../utils/HTTPTransport';

export type CreateUserData = {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    phone: string;
    password: string;
}

class SignupAPI {
  createUser(data: CreateUserData) {
    return httpTransport.post('/auth/signup', {
      data: JSON.stringify(data),
    });
  }
}

export default new SignupAPI();
