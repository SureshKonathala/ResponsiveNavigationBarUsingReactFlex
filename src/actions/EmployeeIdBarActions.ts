import dispatcher from '../dispatcher/dispatcher';

export function previousAction(){
  console.log('in previous Action');
  dispatcher.dispatch({
    actionType: 'PREVIOUS'
  });
};

export function nextAction(){
  console.log('in next Action');
  dispatcher.dispatch({
    actionType: 'NEXT'
  });
};
