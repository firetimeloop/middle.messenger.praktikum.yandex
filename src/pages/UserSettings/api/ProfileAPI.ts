import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

export type ProfileData = {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
}

class ProfileAPI extends BaseAPI {
  update(data: ProfileData) {
    return httpTransport.put('/user/profile', {
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new ProfileAPI();
