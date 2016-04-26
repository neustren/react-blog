import {push} from 'react-router-redux';

export const UPDATE_QUESTION = "PERGUNTA/UPDATE_QUESTION";

export function updateQuestion(data) {
  return {
    type: UPDATE_QUESTION,
    data
  }
}

export function sendQuestion(data) {
  return function(dispatch, getState) {
    var s=getState();
    var a=[].concat(s.pergunta.results);
    a[data.num]=data.index;
    dispatch(updateQuestion(a));
    console.log('/pergunta/'+(data.num+1));
    console.log(data);
    if((data.num+1)===data.length) {
      console.log('cabooo');
      var placar=a.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + data.perguntas[currentIndex].respostas[currentValue][1];
      },0);
      console.log(placar);
        dispatch(push('/resultado/'+placar));
    }
    else {
      dispatch(push('/pergunta/'+(data.num+2)));
    }
  }
}
