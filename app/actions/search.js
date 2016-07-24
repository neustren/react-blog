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
export const SEARCH = 'SEARCH';

import { ROOT_URL } from './index';
//todas

export function search(data, total, page, query) {
  var object = {
    data: data,
    total: total,
    page: page,
    query: query
  };
    return {
      type: SEARCH,
      data: object
    };
}

export function getSearch(QUERY, PAGE) {
  return function(dispatch) {
    return   client.get(`${ROOT_URL}/wp-json/wp/v2/posts?filter[s]=${QUERY}`)
          .end(function(err,res) {
            var total = res.body.length;

    if(!PAGE) {
      PAGE = 1;
    }
    return client.get(`${ROOT_URL}/wp-json/wp/v2/posts?page=${PAGE}&filter[posts_per_page]=6&filter[s]=${QUERY}`)
    .end(function(err,data) {

      let resSearch = JSON.parse(data.text);

    dispatch(search(resSearch, total, PAGE, QUERY))
    })
  })
  }
}

export const SEARCH_ON = 'SEARCH_ON';

export function searchOn(data) {


  return {
    type: SEARCH_ON,
    data
  }
}

/// selecionar
