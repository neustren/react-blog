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
