import {createStore, combineReducers} from 'redux';

//REDUCER
const usersInitialState = {
  username: ""
};

const usersReducer = function(state = usersInitialState, action){
  switch (action.type) {
    case 'USERS_CHANGE_USERNAME':
      state = {...state, username: action.payload};
      break;
    default:
      state;
  }
  return state;
}

const todosInitialState = {
  name: ""
}
const todosReducer = function(state = todosInitialState, action){
  switch (action.type) {
    case 'TODOS_CHANGE_NAME':
      state = {...state, name: action.payload};
      break;
    default:
      state;
  }
  return state;
}

//STORE
const store = createStore(combineReducers({
  usersReducer,
  todosReducer
}));

//SUBSCRIPTIONS
store.subscribe(()=>{
  console.log(store.getState());
});

//DISPATCHER
store.dispatch({type: 'USERS_CHANGE_USERNAME', payload: "radiegtya"});
store.dispatch({type: 'TODOS_CHANGE_NAME', payload: "olahraga otak"});
