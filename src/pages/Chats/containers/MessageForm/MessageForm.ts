import template from './MessageForm.hbs';
import Block from '../../../../utils/Block';
import Input from '../../../../components/Input';

interface MessageFormProps {
    input: Input;
    events?: {
        submit?: (evt: Event) => void;
    };
  }

export default class MessageForm extends Block {
  constructor(props: MessageFormProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
