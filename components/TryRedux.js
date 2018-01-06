import {createStore} from 'redux';

//REDUCER
const reducer = function(state, action){
  if(action.type == "INC"){
    return state + action.payload;
  }

  return state;
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
