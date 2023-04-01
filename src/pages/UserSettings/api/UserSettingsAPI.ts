import httpTransport from '../../../utils/HTTPTransport';

export type ProfileData = {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
}

class UserSettingsAPI {
  deleteSession() {
    return httpTransport.post('/auth/logout');
  }

  update(data: ProfileData) {
    return httpTransport.put('/user/profile', {
        data: JSON.stringify(data),
    });
  }

  updateAvatar(data: FormData) {
    return httpTransport.put('/user/profile/avatar', {
        data,
    });
  }

  request() {
    return httpTransport.get('/auth/user');
  }
}

export default new UserSettingsAPI();
