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
