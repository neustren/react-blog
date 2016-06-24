import {
  SELECTED_CATEGORY
} from '../actions/selectCategory';

var initialState = {
  selected:''
};

export default function category (state = initialState, action) {
  switch (action.type) {
    case SELECTED_CATEGORY:

      return { ...state,...action.data };
      default:
        return state;
      }
}
