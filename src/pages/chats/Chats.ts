import Link from '../../components/Link';
import Block from '../../utils/Block';
import template from './Chats.hbs';
import ChatInfo from './containers/ChatInfo';
import MessageForm from './containers/MessageForm';
import Input from '../../components/Input';
import validateField from '../../utils/validateField';
import submitForm from '../../utils/submitForm';

export default class ChatsPage extends Block {
  initChildren() {
    this.children.messageForm = new MessageForm({
      input: new Input({
        label: 'Сообщение',
        type: 'text',
        name: 'message',
        class: 'message',
        regex: '.+',
        events: {
          focus: validateField('Сообщение не может быть пустым'),
          blur: validateField('Сообщение не может быть пустым'),
        },
      }),
      events: {
        submit: submitForm,
      },
    });
    this.children.linkProfile = new Link({
      label: 'Профиль >',
      href: '/user-settings',
      class: 'link profile-link',
    });
    this.children.chatInfo1 = new ChatInfo({
      title: 'Андрей',
      lastMessage: 'Изображение',
      lastMessageDate: '10:49',
      unreadMessagesCount: '2',
    });
    this.children.chatInfo2 = new ChatInfo({
      title: 'Киноклуб',
      lastMessage: 'Вы: стикер',
      lastMessageDate: '12:00',
      unreadMessagesCount: '',
    });
    this.children.chatInfo3 = new ChatInfo({
      title: 'Илья',
      lastMessage: 'Друзья, у меня для вас...',
      lastMessageDate: '15:12',
      unreadMessagesCount: '4',
    });
    this.children.chatInfo4 = new ChatInfo({
      title: 'Вадим',
      lastMessage: 'Вы: Круто!',
      lastMessageDate: 'Пт',
      unreadMessagesCount: '',
    });
    this.children.chatInfo5 = new ChatInfo({
      title: 'Андрей',
      lastMessage: 'Изображение',
      lastMessageDate: '10:49',
      unreadMessagesCount: '2',
    });
    this.children.chatInfo6 = new ChatInfo({
      title: 'Киноклуб',
      lastMessage: 'Вы: стикер',
      lastMessageDate: '12:00',
      unreadMessagesCount: '',
    });
    this.children.chatInfo7 = new ChatInfo({
      title: 'Илья',
      lastMessage: 'Друзья, у меня для вас...',
      lastMessageDate: '15:12',
      unreadMessagesCount: '4',
    });
    this.children.chatInfo8 = new ChatInfo({
      title: 'Вадим',
      lastMessage: 'Вы: Круто!',
      lastMessageDate: 'Пт',
      unreadMessagesCount: '',
    });
    this.children.chatInfo9 = new ChatInfo({
      title: 'Андрей',
      lastMessage: 'Изображение',
      lastMessageDate: '10:49',
      unreadMessagesCount: '2',
    });
    this.children.chatInfo10 = new ChatInfo({
      title: 'Киноклуб',
      lastMessage: 'Вы: стикер',
      lastMessageDate: '12:00',
      unreadMessagesCount: '',
    });
    this.children.chatInfo11 = new ChatInfo({
      title: 'Илья',
      lastMessage: 'Друзья, у меня для вас...',
      lastMessageDate: '15:12',
      unreadMessagesCount: '4',
    });
    this.children.chatInfo12 = new ChatInfo({
      title: 'Вадим',
      lastMessage: 'Вы: Круто!',
      lastMessageDate: 'Пт',
      unreadMessagesCount: '',
    });
  }

  render() {
    return this.compile(template, {});
  }
}
