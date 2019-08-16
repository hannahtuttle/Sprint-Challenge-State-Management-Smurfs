import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE,
    DELETE_SMURF_DATA_START,
    DELETE_SMURF_DATA_SUCCESS,
    DELETE_SMURF_DATA_FAILURE,
    EDIT_SMURF_DATA_START,
    EDIT_SMURF_DATA_SUCCESS,
    EDIT_SMURF_DATA_FAILURE,
    SEND_SMURF_DATA_START,
    SEND_SMURF_DATA_SUCCESS,
    SEND_SMURF_DATA_FAILURE, 
} from '../actions'

const initialState={
    smurfs: [],
    test: "It's working",
    isLoading: false,
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_DATA_START:
            return {
                ...state, 
                isLoading: true,
                error: ''
            }
        case FETCH_SMURF_DATA_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error: ''
        }
        case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_SMURF_DATA_START:
             return {
                 ...state, 
                isLoading: true,
                error: ''
                    }
        case DELETE_SMURF_DATA_SUCCESS:
            return {
              ...state,
              smurfs: action.payload,
             isLoading: false,
                error: ''
                }
        case DELETE_SMURF_DATA_FAILURE:
            return {
               ...state,
             error: action.payload
                    }
        case EDIT_SMURF_DATA_START:
            return {

            }
        case EDIT_SMURF_DATA_SUCCESS:
            return{

            }
        case EDIT_SMURF_DATA_FAILURE:
            return{

            }
        case SEND_SMURF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case SEND_SMURF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case SEND_SMURF_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}