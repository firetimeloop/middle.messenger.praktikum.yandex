import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

export type UpdatePasswordData = {
    oldPassword: string;
    newPassword: string;
}

class ChangePasswordAPI extends BaseAPI {
  update(data: UpdatePasswordData) {
    return httpTransport.put('/user/password', {
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new ChangePasswordAPI();
