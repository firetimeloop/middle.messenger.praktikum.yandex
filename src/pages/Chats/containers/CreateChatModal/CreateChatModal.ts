import template from './CreateChatModal.hbs';
import Block from '../../../../utils/Block';
import Button from '../../../../components/Button';
import FormField from '../../../../components/FormField';

interface MessageFormProps {
    formField: FormField;
    button: Button;
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
