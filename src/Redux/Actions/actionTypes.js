export const FETCH_WORD_LOADING ="FETCH_WORD_LOADING"
export const FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS'
export const FETCH_WORD_FAILURE = 'FETCH_WORD_FAILURE'


export const fetchWordLoading = ()=> ({
    type:FETCH_WORD_LOADING
})


export const fetchWordSuccess = (data)=> ({
    type:FETCH_WORD_SUCCESS,
    payload:data
})

export const fetchWordFailure = (error) => ({
    type:FETCH_WORD_FAILURE,
    payload:error
})