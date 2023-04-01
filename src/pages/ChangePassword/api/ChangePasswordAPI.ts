import httpTransport from '../../../utils/HTTPTransport';

export type UpdatePasswordData = {
    oldPassword: string;
    newPassword: string;
}

class ChangePasswordAPI {
  update(data: UpdatePasswordData) {
    return httpTransport.put('/user/password', {
      data: JSON.stringify(data),
    });
  }
}

export default new ChangePasswordAPI();
