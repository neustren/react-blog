

import client from 'superagent';
import { ROOT_URL } from './index';

export const TAGS = 'TAGS'

export function tags(data) {
  // const request = client.get(`${ROOT_URL}/wp-json/wp/v2/posts?categories=${CATEGORY}`);

    return {
      type: TAGS,
      data
    };
}

export function getTags() {
  return function(dispatch) {

    return client.get(`${ROOT_URL}/wp-json/wp/v2/tags`)
    .end(function(err,data) {

      let resTags = JSON.parse(data.text);

    dispatch(tags(resTags))
    })
  }
}
