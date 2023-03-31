import Block from '../../utils/Block';
import template from './Button.hbs';

import './button.scss';

interface ButtonProps {
  label: string;
  type: string;
  class?: string;
  events?: {
    click?: () => void;
  };
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
