import httpTransport from '../../../utils/HTTPTransport';
import store from '../../../utils/Store';

export type CreateChatData = {
    title: string;
}

export type AddUserToChatData = {
  users: number[];
  chatId: number;
}

export type UserData = {
  login: string;
}
class ChatsAPI {
  request() {
    return httpTransport.get('/chats');
  }

  create(data: CreateChatData): Promise<XMLHttpRequest> {
    return httpTransport.post('/chats', {
      data: JSON.stringify(data),
    });
  }

  createToken() {
    return httpTransport.post(`/chats/token/${store.getState().currentChatId}`);
  }

  addUser(data: AddUserToChatData): Promise<XMLHttpRequest> {
    return httpTransport.put('/chats/users', {
      data: JSON.stringify(data),
    });
  }

  deleteUser(data: AddUserToChatData): Promise<XMLHttpRequest> {
    return httpTransport.delete('/chats/users', {
      data: JSON.stringify(data),
    });
  }

  requestUserId(data: UserData): Promise<XMLHttpRequest> {
    return httpTransport.post('/user/search', {
      data: JSON.stringify(data),
    });
  }
}

export default new ChatsAPI();
