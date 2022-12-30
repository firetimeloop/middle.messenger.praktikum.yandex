import template from './ChatInfo.hbs';
import Block from '../../../../utils/Block';

interface ChatInfoProps {
    title: string;
    lastMessage: string;
    lastMessageDate: string;
    unreadMessagesCount: string;
  }

export default class ChatInfo extends Block {
  constructor(props: ChatInfoProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
