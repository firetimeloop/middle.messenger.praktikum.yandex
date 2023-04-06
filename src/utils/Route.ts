/* eslint no-underscore-dangle: 0 */
import Block from './Block';
import renderDom from './renderDom';

class Route {
  private _pathname: string;

  private _blockClass: new () => Block;

  private _block: Block | null;

  private _props: Record<string, any>;

  constructor(pathname: string, view: new () => Block, props: Record<string, any>) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
    }

    renderDom(this._props.rootQuery, this._block);
    this._block.show();
  }
}

export default Route;
