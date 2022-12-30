import Link from '../../components/Link';
import Block from '../../utils/Block';
import template from './Error404.hbs';

export default class Error404Page extends Block {
  initChildren() {
    this.children.link = new Link({
      label: 'Назад к чатам',
      href: '/chats',
      class: 'link',
    });
  }

  render() {
    return this.compile(template, { title: '404', description: 'Не туда попали' });
  }
}
