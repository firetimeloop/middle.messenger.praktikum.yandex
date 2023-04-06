import Block from '../../utils/Block';
import Button from '../Button';
import template from './SettingsForm.hbs';
import { withUserDisplayNameTitle } from '../../utils/connect';

import './SettingsForm.scss';

interface SettingsFormProps {
  avatarDisabled?: string;
  avatar?: string;
  button: Button;
  title?: string;
  links?: Block;
  formFields: Block;
  events?: {
    submit?: (evt: Event) => void;
  };
}

class SettingsForm extends Block {
  constructor(props: SettingsFormProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withUserDisplayNameTitle(SettingsForm as typeof Block);
