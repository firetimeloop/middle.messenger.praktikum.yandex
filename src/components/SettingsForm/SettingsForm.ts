import Block from '../../utils/Block';
import Button from '../Button';
import template from './SettingsForm.hbs';

import './SettingsForm.scss';

interface SettingsFormProps {
  avatarDisabled?: string;
  button: Button;
  title: string;
  links?: Block;
  formFields: Block;
  events?: {
    submit?: (evt: Event) => void;
  };
}

export default class SettingsForm extends Block {
  constructor(props: SettingsFormProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
