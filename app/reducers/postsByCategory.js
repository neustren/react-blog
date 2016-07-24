// *************************************************************************
// * Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
// *
// * This file is part of Brasilcap Blog Project.
// * The complete set of authors may be found at http://www.effy.com.br
// * Unauthorized copying of this file, via any medium is strictly prohibited
// * This code can not be copied and/or distributed without the express
// * permission of EFFY
// * Effy - support@effy.com.br
// *************************************************************************



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

      return { ...state, posts:action.data, page: action.page, hasMore: action.hasMore, category: action.category };

      default:
        return state;
      }
}
