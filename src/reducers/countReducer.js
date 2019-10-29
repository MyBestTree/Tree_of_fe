import { INCREMENT } from "../actions/actionType";


const initState = {
    count : 100
}

const countReducer = (state = initState, action ) => {
    const newState = {
        ...state
    }
    switch (action.type ) {
        case INCREMENT:
            newState.count++ ;
            break;
    
        default:
            break;
    }

    return newState;
}



export default countReducer;