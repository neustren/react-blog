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
