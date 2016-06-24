import {
  POST_OPENED
} from '../actions/postOpened';

var initialState = {

    post: '',
    imagem: ''
  };

export default function postOpened (state = initialState, action) {
  switch (action.type) {
    case POST_OPENED:

      return { ...state,...action.data };
      default:
        return state;
      }
}
