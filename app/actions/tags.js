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

    return client.get(`${ROOT_URL}/wp-json/wp/v2/tags?per_page=100`)
    .end(function(err,data) {

      let resTags = JSON.parse(data.text);

    dispatch(tags(resTags))
    })
  }
}
