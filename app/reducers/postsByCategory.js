

import {
  POSTS_BY_CATEGORY
} from '../actions/postsByCategory';

var initialState = {
  posts:[]
};

export default function postsByCategory (state = initialState, action) {
  switch (action.type) {
    case POSTS_BY_CATEGORY:

      return { ...state, posts:action.data };
      default:
        return state;
      }
}
