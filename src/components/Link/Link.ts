import Block from '../../utils/Block';
import template from './Link.hbs';

import './Link.scss';

interface LinkProps {
  label: string;
  href?: string;
  class: string;
  events?: {
    click?: (evt: Event) => void;
  };
}

export default class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
