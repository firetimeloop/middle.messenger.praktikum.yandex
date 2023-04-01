import template from './ChatInfos.hbs';
import Block from '../../../../utils/Block';

interface ChatInfosProps {
  chats: Block[]
}

export default class ChatInfos extends Block {
  constructor(props: ChatInfosProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
