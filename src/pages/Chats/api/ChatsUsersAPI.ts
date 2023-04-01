import BaseAPI from '../../../utils/BaseAPI';
import httpTransport from '../../../utils/HTTPTransport';

export type AddUserToChatData = {
    users: number[];
    chatId: number;
}

class ChatsUsersAPI extends BaseAPI {
  update(data: AddUserToChatData): Promise<XMLHttpRequest> {
    return httpTransport.put('/chats/users', {
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  delete(data: AddUserToChatData): Promise<XMLHttpRequest> {
    return httpTransport.delete('/chats/users', {
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new ChatsUsersAPI();
