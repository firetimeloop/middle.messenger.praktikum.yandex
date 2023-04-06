import { expect } from 'chai';
import sinon from 'sinon';

import Button from './Button';

describe('Button', () => {
  it('should render', () => {
    new Button({ label: 'Button', type: 'button' });
  });

  it('element should return button', () => {
    const button = new Button({ label: 'Button', type: 'button' });
    const { element } = button;

    expect(element).to.be.instanceof(window.HTMLButtonElement);
  });

  it('element should has attribute display = block after calling show method', () => {
    const button = new Button({ label: 'Button', type: 'button' });

    button.show();

    const { element } = button;

    expect(element?.style.display).to.eq('block');
  });

  it('element should has attribute display = hide after calling hide method', () => {
    const button = new Button({ label: 'Button', type: 'button' });

    button.hide();

    const { element } = button;

    expect(element?.style.display).to.eq('none');
  });

  it('should call click event on click', () => {
    const callback = sinon.stub();
    const button = new Button({
      label: 'Button',
      type: 'button',
      events: {
        click: callback,
      },
    });

    const element = button.element as HTMLButtonElement;

    element.click();

    expect(callback.calledOnce).to.eq(true);
  });
});
