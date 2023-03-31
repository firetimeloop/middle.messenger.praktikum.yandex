import set, { Indexed } from './set';
import EventBus from './EventBus';

export enum StoreEvents {
    Updated = 'updated',
  }

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
