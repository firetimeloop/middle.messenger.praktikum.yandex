import Block from '../../utils/Block';
import template from './Input.hbs';

interface InputProps {
  label: string;
  name: string;
  type: string;
  class: string;
  regex?: string;
  events?: {
    focus?: (event: Event & { target: HTMLInputElement }) => void;
    blur?: (event: Event & { target: HTMLInputElement }) => void;
  };
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
