import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

class ProfileAvatarAPI extends BaseAPI {
  update(data: FormData) {
    return httpTransport.put('/user/profile/avatar', {
      data,
    });
  }
}

export default new ProfileAvatarAPI();
