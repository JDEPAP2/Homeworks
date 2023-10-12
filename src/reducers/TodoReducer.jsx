import * as types from "../components/types"
export const TodoReducer  = (initialState = [], action) => {
    switch(action.type){
        case types.CREATE_TODO:
            return [...initialState, action.payload];
            
        case types.REMOVE_TODO:
            initialState = initialState.filter(e=>e.id != action.payload)
            console.log( [...initialState] )
            return [...initialState]
        case types.DONE_TODO:
            initialState.forEach(v=>{
                if(v.id == action.payload.id){
                    v.done = action.payload.done
                }
            })
            return [...initialState]
        default:
            return initialState;
    }
}