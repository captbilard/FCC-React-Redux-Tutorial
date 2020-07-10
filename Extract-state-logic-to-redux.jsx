// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';
let addMessage = (message) =>{
  return {
    type: ADD,
    message: message
  }
}

let messageReducer = (state = [], action)=>{
  switch(action.type){
    case ADD:
      let arr = [...state, action.message]
      return arr;
    default:
      return state;
  }
} 

const store = Redux.createStore(messageReducer)