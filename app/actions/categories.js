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

import client from 'superagent';
export const CATEGORIES = 'CATEGORIES';

import { ROOT_URL } from './index';
//todas

export function categories(data) {
  // const request = client.get(`${ROOT_URL}/wp-json/wp/v2/posts?categories=${CATEGORY}`);

    return {
      type: CATEGORIES,
      data
    };
}

export function getCategories() {
  return function(dispatch) {

    return client.get(`${ROOT_URL}/wp-json/wp/v2/categories`)
    .end(function(err,data) {

      let resCategories = JSON.parse(data.text);

    dispatch(categories(resCategories))
    })
  }
}

/// selecionar
