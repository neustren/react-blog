import client from 'superagent';
import { ROOT_URL } from './index';

export const POSTS_BY_CATEGORY = 'POSTS_BY_CATEGORY';
export const INCREASE_PAGE = 'waw/INCREASE_PAGE';

export function postsByCategory(data, page, hasMore, category) {
  // const request = client.get(`${ROOT_URL}/wp-json/wp/v2/posts?categories=${CATEGORY}`);

    return {
      type: POSTS_BY_CATEGORY,
      data,
      page,
      hasMore,
      category
    };
}



export function getPostsByCategory(CATEGORY, PAGE) {
  return function(dispatch) {

    return client.get(`${ROOT_URL}/wp-json/wp/v2/posts?filter[posts_per_page]=${PAGE ? 5+3*PAGE : 5}${CATEGORY===0 ?'' : `&categories=${CATEGORY}`}`)
    .end(function(err,data) {

      let enderecos = JSON.parse(data.text);
      console.log(data.headers);
      var hasMore=data.headers["x-wp-totalpages"]!=="1";
      console.log(hasMore);

    dispatch(postsByCategory(enderecos, PAGE, hasMore, CATEGORY));
    })
  }
}
