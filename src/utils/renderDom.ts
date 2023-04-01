import Block from './Block';

export default function renderDom(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error('Root not found');
  }

  const element = component.getElement();

  if (element) {
    root.innerHTML = '';

    component.dispatchComponentDidMount();

    root.append(element);
  }
}
