import {
  MODAL
} from '../actions/modal';

var initialState = {
  showModal: false
  };
export default function modal (state = initialState, action) {
  switch (action.type) {
    case MODAL:
    console.log(action);
        return { ...state, showModal: action.showModal };
      default:
        return state;
      }
}
