import httpTransport from '../../../utils/HTTPTransport';

export type CreateSessionData = {
    login: string;
    password: string;
}

class LoginAPI {
  createSession(data: CreateSessionData) {
    return httpTransport.post('/auth/signin', {
      data: JSON.stringify(data),
    });
  }
}

export default new LoginAPI();
