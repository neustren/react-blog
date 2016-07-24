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

import axios from 'axios';

export const SELECTED_CATEGORY = 'SELECTED_CATEGORY';


export function selectCategory(data) {

  var object = {
    selected: data
  };
  return {
    type: SELECTED_CATEGORY,
    data: object
  };
}

/*
5 = ESTILO
2 = financas
4 = imoveis
3 = MUNDO
1 = semcategoria

*/
