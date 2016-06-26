import client from 'superagent';
export const SEARCH = 'SEARCH';

import { ROOT_URL } from './index';
//todas

export function search(data, total, page, query) {
  // const request = client.get(`${ROOT_URL}/wp-json/wp/v2/posts?search=${CATEGORY}`);
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
// http://tymo.com.br/bblog/index.php/wp-json/wp/v2/posts?filter[s]=


export function getSearch(QUERY, PAGE) {
  return function(dispatch) {
    return   client.get(`${ROOT_URL}/wp-json/wp/v2/posts?filter[s]=${QUERY}`)
          .end(function(err,res) {
            var total = res.body.length;

    if(!PAGE) {
      PAGE = 1;
    }
    return client.get(`${ROOT_URL}/wp-json/wp/v2/posts?page=${PAGE}&filter[posts_per_page]=2&filter[s]=${QUERY}`)
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
