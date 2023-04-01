import Block from '../../utils/Block';
import Button from '../Button';
import Link from '../Link';
import template from './AuthForm.hbs';

import './AuthForm.scss';

interface AuthFormProps {
  title: string;
  button: Button;
  link: Link;
  formFields: Block;
  events?: {
    submit?: (evt: Event) => void;
  };
}

export default class AuthForm extends Block {
  constructor(props: AuthFormProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
