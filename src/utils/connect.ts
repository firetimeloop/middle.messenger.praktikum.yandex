import { Indexed } from './set';
import Block from './Block';
import store, { StoreEvents } from './Store';
import { isEqual } from './isEqual';

function connect<T extends Record<string, any> = Record<string, any>>(
  mapStateToProps: (state: Indexed) => Indexed,
) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: T) {
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          state = newState;
        });
      }
    };
  };
}

export function withUser<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({ user: state.user }))(Component);
}

export function withUserEmailValue<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({ value: (state.user || {}).email }))(Component);
}

export function withUserLoginValue<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({ value: (state.user || {}).login }))(Component);
}

export function withUserFirstNameValue<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({ value: (state.user || {}).first_name }))(Component);
}

export function withUserSecondNameValue<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({ value: (state.user || {}).second_name }))(Component);
}

export function withUserPhoneValue<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({ value: (state.user || {}).phone }))(Component);
}

export function withUserDisplayNameValue<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({ value: (state.user || {}).display_name }))(Component);
}

export function withUserDisplayNameTitle<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({ title: (state.user || {}).display_name }))(Component);
}

export function withUserAvatar<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => ({ avatar: (state.user || {}).avatar }))(Component);
}

export function withCurrentTitle<T extends Record<string, any>>(Component: typeof Block) {
  return connect<T>((state) => (
    {
      title: (((state.chats || []).find(
        ({ id }: {id: string}) => id === state.currentChatId,
      )) || {}).title,
    }
  ))(Component);
}

export default connect;
