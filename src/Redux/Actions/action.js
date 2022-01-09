import { fetchWordFailure, fetchWordLoading, fetchWordSuccess } from "./actionTypes";
import axios from 'axios'

export const fetchWordAction = (text) =>{
    return async (dispatch) =>{
        dispatch(fetchWordLoading())

        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}` )

            const data = response.data[0]
            console.log(data)

            dispatch(fetchWordSuccess(data))

        } catch (error) {

            dispatch(fetchWordFailure(error))
            
        }

    }


}