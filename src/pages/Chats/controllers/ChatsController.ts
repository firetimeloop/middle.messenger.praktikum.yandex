import store from '../../../utils/Store';
import chatsAPI, { CreateChatData, AddUserToChatData, UserData } from '../api/ChatsAPI';

class ChatsController {
  public getChats() {
    return chatsAPI
      .request()
      .then((data) => {
        store.set('chats', JSON.parse(data.response));
      });
  }

  public createChat(data: CreateChatData, callback: VoidFunction) {
    return chatsAPI
      .create(data)
      .then((res) => {
        if (res.status === 200) {
          callback();
        } else {
          console.log('Something went wrong');
        }
      });
  }

  public addUserToChat(data: UserData, callback: VoidFunction) {
    return this.getUserId(data).then((res) => {
      const { currentChatId } = store.getState();
      if (res && currentChatId) {
        const addUserData: AddUserToChatData = {
          users: [res],
          chatId: currentChatId,
        };
        chatsAPI
          .addUser(addUserData)
          .then((chatsRes) => {
            if (chatsRes.response === 'OK' && chatsRes.status === 200) {
              callback();
            } else {
              console.log('Something went wrong');
            }
          });
      }
    });
  }

  public deleteUserToChat(data: UserData, callback: VoidFunction) {
    return this.getUserId(data).then((res) => {
      const { currentChatId } = store.getState();
      if (res && currentChatId) {
        const addUserData: AddUserToChatData = {
          users: [res],
          chatId: currentChatId,
        };
        chatsAPI
          .deleteUser(addUserData)
          .then((resChats) => {
            if (resChats.response === 'OK' && resChats.status === 200) {
              callback();
            } else {
              console.log('Something went wrong');
            }
          });
      }
    });
  }

  public getUserId(data: UserData) {
    return chatsAPI
      .requestUserId(data)
      .then((res) => JSON.parse(res.response)[0]?.id);
  }

  public getChatToken() {
    return chatsAPI.createToken();
  }
}

export default new ChatsController();
