import {UPDATE_FIELD} from '../actions/cadastro';

var initialState = {email: "", nome: ""}

export default function reducer(state=initialState, action={}) {
    switch(action.type) {
      case UPDATE_FIELD:
        return {...state, ...action.data}
      default:
        return state;
    }
}
