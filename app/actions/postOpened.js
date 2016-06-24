import client from 'superagent';
import { ROOT_URL } from './index';

export const POST_OPENED = 'POST_OPENED'

export function postOpened(data,imagem) {
  // const request = client.get(`${ROOT_URL}/wp-json/wp/v2/posts?categories=${CATEGORY}`);
  var object = {
    post: data,
    imagem: imagem
  };
    return {
      type: POST_OPENED,
      data: object
    };
}

export function getPostOpened(CATEGORY) {
  return function(dispatch) {

    return client.get(`${ROOT_URL}/wp-json/wp/v2/posts?categories=${CATEGORY}`)
    .end(function(err,data) {

      let enderecos = JSON.parse(data.text);

    dispatch(postOpened(enderecos))
    })
  }
}
