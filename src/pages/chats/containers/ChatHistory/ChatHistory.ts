import template from './ChatHistory.hbs';
import Block from '../../../../utils/Block';

interface ChatHistoryProps {
  title: string;
  buttonDeleteUser: Block;
  buttonAddUser: Block;
  chatMessages: Block;
}

export default class ChatHistory extends Block {
  constructor(props: ChatHistoryProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
