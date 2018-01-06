import {createStore} from 'redux';

//REDUCER
const reducer = function(state, action){
  let newState;
  switch (action.type) {
    case "INC":
      newState = state + action.payload;
      break;
    case "DEC":
      newState = state - action.payload;
      break;
    default:
      newState = state;
  }

  return newState;
}

//STORE
const store = createStore(reducer, 0);

//SUBSCRIPTIONS
store.subscribe(()=>{
  console.log(store.getState());
});

//DISPATCHER
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 3});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "DEC", payload: 2});
