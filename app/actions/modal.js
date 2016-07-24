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

export const MODAL = 'MODAL';

export function showModal(data) {
console.log(data);

  return {
    type: MODAL,
    showModal: data
  };
}

/*
5 = ESTILO
2 = financas
4 = imoveis
3 = MUNDO
1 = semcategoria

*/
