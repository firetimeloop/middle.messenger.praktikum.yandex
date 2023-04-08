import { expect } from 'chai';
import sinon from 'sinon';
import Router from './Router';

describe('Router', () => {
  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };
  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };

  const getContentFake = sinon.fake.returns({
    _block: {
      show: () => {},
      hide: () => {},
    },
  });

  const BlockMock = class {
    getElement = getContentFake;

    dispatchComponentDidMount = () => {};

    show = () => {};

    hide = () => {};
  } as any;

  beforeEach(() => {
    getContentFake.resetHistory();
  });

  it('use() should return Router instance', () => {
    const result = Router.use('/', BlockMock);

    expect(result).to.eq(Router);
  });

  it('should render a page on start', () => {
    Router
      .use('/', BlockMock)
      .start();

    expect(getContentFake.callCount).to.eq(1);
  });

  it('getRoute() should return valid route', () => {
    Router
      .use('/', BlockMock)
      .start();

    const route = Router.getRoute('/');

    expect(route?.match('/')).to.eq(true);
  });

  it('back() should render a page on history back action', () => {
    Router
      .use('/', BlockMock)
      .start();

    Router.back();

    expect(getContentFake.callCount).to.eq(2);
  });

  it('forward() should render a page on history forward action', () => {
    Router
      .use('/', BlockMock)
      .start();

    Router.forward();

    expect(getContentFake.callCount).to.eq(2);
  });
});
