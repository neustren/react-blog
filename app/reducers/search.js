import {
  SEARCH,
  SEARCH_ON
} from '../actions/search';

var initialState = {
  search: [],
  searchOn: false
  };
export default function search (state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.data };
    case SEARCH_ON:
        return { ...state, searchOn: action.data };
      default:
        return state;
      }
}
