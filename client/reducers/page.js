import { SET_FIELDS } from '../actions';

const page = (state = {}, action) => {
  switch (action.type) {
    case SET_FIELDS:
      const { fields } = action;

      return {
        fields,
      };

    default: return state;
  }
  return state;
};

export default page;
