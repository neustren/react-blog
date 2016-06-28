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

            client.get(`${ROOT_URL}/wp-json/wp/v2/posts?filter[name]=${CATEGORY}`)
                .end(function(err, data) {

                    let dataE = JSON.parse(data.text);
                    let dataF=dataE[0];
                    let imagem = dataF.featured_media;
                    var res;

                    if (false) {
                        client.get(`${ROOT_URL}/wp-json/wp/v2/media/${imagem}`)
                            .end(function(err, data) {
                                res = JSON.parse(data.text);

                                dispatch(postOpened(dataF, res.source_url));
                            });

                    }
                    else {
                      dispatch(postOpened(dataF, res));
                    }

                });
    }
}
