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
  MODAL
} from '../actions/modal';

var initialState = {
  showModal: false
  };
export default function modal (state = initialState, action) {
  switch (action.type) {
    case MODAL:
    console.log(action);
        return { ...state, showModal: action.showModal };
      default:
        return state;
      }
}
