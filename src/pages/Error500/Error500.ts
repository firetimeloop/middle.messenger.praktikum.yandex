import Link from '../../components/Link';
import Block from '../../utils/Block';
import template from './Error500.hbs';

export default class Error500Page extends Block {
  initChildren() {
    this.children.link = new Link({
      label: 'Назад к чатам',
      href: '/messenger',
      class: 'link',
    });
  }

  render() {
    return this.compile(template, { title: '500', description: 'Мы уже фиксим' });
  }
}
