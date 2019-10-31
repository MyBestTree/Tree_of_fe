import { GET_MOVIES } from './../actions/actionType';
const initState = {
    data:null
}

const homeReducer = ( state =initState,action ) => {
    const newState = {
        ...state
    }
    switch ( action.type ) {
        case GET_MOVIES:
            newState.data = action.payload
            break;
    
        default:
            break;
    }
    return newState
}
export default homeReducer