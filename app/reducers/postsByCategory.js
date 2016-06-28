

import {
  POSTS_BY_CATEGORY
} from '../actions/postsByCategory';

var initialState = {
  posts:[],
  page: 0,
  hasMore: true
};

export default function postsByCategory (state = initialState, action) {
  switch (action.type) {
    case POSTS_BY_CATEGORY:

      return { ...state, posts:action.data, page: action.page, hasMore: action.hasMore };

      default:
        return state;
      }
}
