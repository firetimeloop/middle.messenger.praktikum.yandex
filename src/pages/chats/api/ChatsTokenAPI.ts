import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';
import store from '../../../utils/Store';

class ChatsTokenAPI extends BaseAPI {
  create() {
    return httpTransport.post(`/chats/token/${store.getState().currentChatId}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new ChatsTokenAPI();
