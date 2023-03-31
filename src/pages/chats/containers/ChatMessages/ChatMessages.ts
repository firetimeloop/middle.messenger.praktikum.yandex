import template from './ChatMessages.hbs';
import Block from '../../../../utils/Block';

interface ChatMessagesProps {
  messages: Block[]
}

export default class ChatMessages extends Block {
  constructor(props: ChatMessagesProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
