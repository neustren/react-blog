import {
  CATEGORIES
} from '../actions/categories';

var initialState = {
  categories: []
  };
export default function categories (state = initialState, action) {
  switch (action.type) {
    case CATEGORIES:

      return { ...state, categories: action.data };
      default:
        return state;
      }
}
