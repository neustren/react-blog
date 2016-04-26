import {UPDATE_QUESTION} from '../actions/pergunta';

var initialState = {results: []}

export default function reducer(state=initialState, action={}) {
    switch(action.type) {
      case UPDATE_QUESTION:
        return { results: action.data }
      default:
        return state;
    }
}
