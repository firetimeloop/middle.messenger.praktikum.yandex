import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

export type CreateChatData = {
    title: string;
}

class ChatsAPI extends BaseAPI {
  request() {
    return httpTransport.get('/chats', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  create(data: CreateChatData): Promise<XMLHttpRequest> {
    return httpTransport.post('/chats', {
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new ChatsAPI();
