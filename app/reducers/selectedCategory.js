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
