import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

export type UserData = {
    login: string;
}

class UserAPI extends BaseAPI {
  create(data: UserData): Promise<XMLHttpRequest> {
    return httpTransport.post('/user/search', {
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new UserAPI();
