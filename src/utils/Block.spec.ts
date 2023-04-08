// eslint-disable-next-line max-classes-per-file
import proxyquire from 'proxyquire';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './Block';

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
};

const { default: Block } = proxyquire('./Block', {
  './EventBus': {
    default: class {
      emit = eventBusMock.emit;

      on = eventBusMock.on;
    },
  },
}) as { default: typeof BlockType };

describe('Block', () => {
  class ComponentMock extends Block {}

  it('should fire init event on initialization', () => {
    // eslint-disable-next-line no-new
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith(Block.EVENTS.INIT)).to.eq(true);
  });

  it('should fire flow:component-did-update event on set props', () => {
    const block = new ComponentMock({
      someProps: '',
    });

    block.setProps({
      someProps: '',
    });

    expect(eventBusMock.emit.calledWith(Block.EVENTS.FLOW_CDU)).to.eq(true);
  });

  it('should fire flow:component-did-update event on dispatchComponentDidMount', () => {
    const block = new ComponentMock({});

    block.dispatchComponentDidMount();

    expect(eventBusMock.emit.calledWith(Block.EVENTS.FLOW_CDM)).to.eq(true);
  });

  it('should return fragment by calling render method', () => {
    const block = new ComponentMock();

    const fragment = block.render();

    expect(fragment).to.be.instanceof(window.DocumentFragment);
  });
});
