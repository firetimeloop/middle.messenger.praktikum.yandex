/* eslint-disable */
import { nanoid } from 'nanoid';
import EventBus from './EventBus';
import { isEqual } from './isEqual';

abstract class Block<T extends Record<string, any> = Record<string, any>> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public id = nanoid(6);

  protected props: T;

  private eventBus: () => EventBus;

  public children: Record<string, Block | Block[]>;

  private _element: HTMLElement | null = null;

  constructor(propsWithChildren: any = {}) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this.children = children;

    this.props = this._makePropsProxy(props) as T;

    this.initChildren();

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  protected initChildren() {}

  protected transferPropsToChildren() {}

  _getChildrenAndProps(childrenAndProps: any) {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  _addEvents() {
    const { events = {} } = this.props as unknown as { events: Record<string, () =>void> };

    Object.entries(events).forEach(([event, handler]) => {
      this._element?.addEventListener(event, handler);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props as unknown as { events: Record<string, () =>void> };

    Object.entries(events).forEach(([event, handler]) => {
      this._element?.removeEventListener(event, handler);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((innerChild) => {
          innerChild.dispatchComponentDidMount()
        })
        return;
      }
      child.dispatchComponentDidMount()
    });
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(_oldProps: any, _newProps: any) {
    return !isEqual(_oldProps, _newProps);
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();

    const newElement = fragment.firstElementChild;

    this._removeEvents();

    if (this._element && newElement) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement as HTMLElement;

    this._addEvents();
  }

  protected compile(template: (context: any) => string, context: any) {
    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    const contextAndStubs = { ...context };

    Object.entries(this.props).forEach(([key, value]) => {
      if (Array.isArray(value) && value[0] instanceof Block) {
        this.children[key] = value;
      }
    })

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map((componentPart) => `<div data-id="${componentPart.id}"></div>`).join('')
        return;
      }
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    });

    const htmlString = template(contextAndStubs);

    fragment.innerHTML = htmlString;

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach(componentParts => {
          const stub = fragment.content.querySelector(`[data-id="${componentParts.id}"]`);

          if (!stub) {
            return;
          }
    
          componentParts.getElement()?.append(...Array.from(stub.childNodes));

          stub.replaceWith(componentParts.getElement()!);
        })
        return;
      }

      const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getElement()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component.getElement()!);
    });

    return fragment.content;
  }

  render(): DocumentFragment {
    return new DocumentFragment();
  }

  getElement() {
    return this._element;
  }

  _makePropsProxy(props: Record<string, any>) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value: unknown) {
        const oldTarget = { ...target };

        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);

    Object.entries(this.props).forEach(
      ([key, value]) => element.setAttribute(key, String(value)),
    );

    return element;
  }

  _setDisplayStyle(displayValue: 'block' | 'flex' | 'none') {
    const element = this.getElement();

    if (element) {
      element.style.display = displayValue;
    }
  }

  show(isFlex?: boolean) {
    if (isFlex) {
      this._setDisplayStyle('flex');
      return;
    }
    
    this._setDisplayStyle('block');
  }

  hide() {
    this._setDisplayStyle('none');
  }
}

export default Block;
