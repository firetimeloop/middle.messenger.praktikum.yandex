import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

class LogoutAPI extends BaseAPI {
  delete() {
    return httpTransport.post('/auth/logout', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new LogoutAPI();
