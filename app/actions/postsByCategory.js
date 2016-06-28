import client from 'superagent';
import { ROOT_URL } from './index';

export const POSTS_BY_CATEGORY = 'POSTS_BY_CATEGORY'

export function postsByCategory(data) {
  // const request = client.get(`${ROOT_URL}/wp-json/wp/v2/posts?categories=${CATEGORY}`);

    return {
      type: POSTS_BY_CATEGORY,
      data
    };
}

export function getPostsByCategory(CATEGORY, PAGE) {
  return function(dispatch) {

    return client.get(`${ROOT_URL}/wp-json/wp/v2/posts${CATEGORY===0 ?'' : `?categories=${CATEGORY}`}`)
    .end(function(err,data) {

      let enderecos = JSON.parse(data.text);

    dispatch(postsByCategory(enderecos))
    })
  }
}
