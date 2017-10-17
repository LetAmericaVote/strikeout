import { SET_CLASSES } from '../actions';

const routing = (state = {}, action) => {
  switch (action.type) {
    case SET_CLASSES:
      const { classes } = action;

      return {
        classes,
      };
    
    default: return state;
  }
  return state;
};

export default routing;
