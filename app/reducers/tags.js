import {
  TAGS
} from '../actions/tags';

var initialState = {
    tags: []
};

export default function tags (state = initialState, action) {
  switch (action.type) {
    case TAGS:

      return { ...state, tags: action.data };
      default:
        return state;
      }
}
