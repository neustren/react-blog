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
