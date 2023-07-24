//action types
const Increment = "INCREMENT"
const Decrement = "DECREMENT"

//action creators
const IncrementAction = ()=>{
    return{
        type: Increment
    }
}
const DecrementAction = ()=>{
    return{
        type: Decrement
    }
}

//reducer
export default function counterReducer(state=[],action){
    switch(action.type){
       case Increment:
          return state;
       case Decrement:
          return state;
       default:
          return state;
        
    }
}

//store
