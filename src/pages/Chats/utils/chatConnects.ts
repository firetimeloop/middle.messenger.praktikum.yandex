/* eslint camelcase: 0 */
import ChatInfo from '../containers/ChatInfo';
import chatsController from '../controllers/ChatsController';
import ChatMessage from '../containers/ChatMessage';
import getDateString from '../../../utils/getDateString';
import connect from '../../../utils/connect';
import store from '../../../utils/Store';
import Block from '../../../utils/Block';
import userSettingsController from '../../UserSettings/controllers/UserSettingsController';

type ChatData = {
    title: string;
    unread_count: string;
    id: string;
    last_message: {
      content: string;
      time: string;
    };
  }

// TODO хм
export function withChats<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({
    chats: (state.chats || []).map(({
      title, unread_count, id, last_message,
    }: ChatData) => (
      new ChatInfo({
        title,
        lastMessage: last_message?.content,
        lastMessageDate: getDateString(last_message?.time),
        unreadMessagesCount: unread_count,
        events: {
          click: () => {
            store.set('currentChatId', id);
            chatsController.getChatToken().then((res) => {
              const { token } = JSON.parse(res.response);

              userSettingsController.getUser().then(() => {
                const { user: { id: userId }, currentChatId } = store.getState();

                if (userId && currentChatId && token) {
                  store.set('messages', []);

                  const socketUrlPrefix = 'wss://ya-praktikum.tech/ws/chats/';

                  const socketUrl = `${socketUrlPrefix}${userId}/${currentChatId}/${token}`;
                  const socket = new WebSocket(socketUrl);

                  socket.addEventListener('open', () => {
                    console.log('Соединение установлено');

                    socket.send(JSON.stringify({
                      content: '0',
                      type: 'get old',
                    }));
                  });

                  socket.addEventListener('close', (event) => {
                    if (event.wasClean) {
                      console.log('Соединение закрыто чисто');
                    } else {
                      console.log('Обрыв соединения');
                    }

                    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
                  });

                  socket.addEventListener('message', (event) => {
                    console.log('Получены данные', event.data);
                    const currentMessages = store.getState()?.messages;

                    try {
                      let messages = JSON.parse(event.data);
                      if (!Array.isArray(messages)) {
                        messages = [messages];
                      }

                      if (currentMessages) {
                        store.set('messages', [...currentMessages, ...messages]);
                        return;
                      }
                      store.set('messages', messages);
                    } catch (error) {
                      console.log('Неверное данные сообщения', error);
                    }
                  });

                  store.set('socket', socket);
                }
              });
            });
          },
        },
      })
    )),
  }))(Component);
}

  type MessageData = {
    user_id: string;
    time: string;
    content: string
  }

export function withMessages<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({
    messages: (state.messages || []).map(({ user_id, time, content }: MessageData) => (
      new ChatMessage({
        date: getDateString(time),
        message: content,
        class: user_id === store.getState().user.id ? 'chat__message_my' : '',
      })
    )),
  }))(Component);
}
