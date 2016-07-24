/**
* @license
* Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
*
* This file is part of Brasilcap Blog Project.
* The complete set of authors may be found at http://www.effy.com.br
* Unauthorized copying of this file, via any medium is strictly prohibited
* This code can not be copied and/or distributed without the express
* permission of EFFY
* Effy - support@effy.com.br
*************************************************************************/

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
