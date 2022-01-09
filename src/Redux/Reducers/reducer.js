import { FETCH_WORD_FAILURE, FETCH_WORD_LOADING, FETCH_WORD_SUCCESS } from "../Actions/actionTypes";

const initialState = {
    word:[],
    loading:true,
    error:''
}

export const fetchWordReducer = (state= initialState,action) =>{
  
    switch(action.type){
        case FETCH_WORD_LOADING:
            return{
                ...state,
                loading:true
            }

        case FETCH_WORD_SUCCESS:
            return{
                ...state,
                loading:false,
                word:action.payload
            }
        
        case FETCH_WORD_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
            default: return state
    }

}