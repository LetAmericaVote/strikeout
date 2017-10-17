import { SET_PATHNAME } from '../actions';

const routing = (state = {}, action) => {
  switch (action.type) {
    case SET_PATHNAME:
      const { pathname } = action;

      return {
        ...state,
        pathname,
        history: [...state.history, pathname],
      };

    default: return state;
  }
  return state;
};

export default routing;
