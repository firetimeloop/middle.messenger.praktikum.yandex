import Block from '../../utils/Block';
import template from './Link.hbs';

interface LinkProps {
  label: string;
  href: string;
  class: string;
}

export default class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
