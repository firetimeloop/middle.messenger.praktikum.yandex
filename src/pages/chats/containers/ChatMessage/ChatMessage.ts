import template from './ChatMessage.hbs';
import Block from '../../../../utils/Block';

interface ChatMessageProps {
    message: string;
    date: string;
    class: string;
  }

export default class ChatMessage extends Block {
  constructor(props: ChatMessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
