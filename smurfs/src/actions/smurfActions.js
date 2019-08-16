import axios from 'axios'

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START'
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS'
export const FETCH_SMURF_DATA_FAILURE =  'FETCH_SMURF_DATA_FAILURE'

export const DELETE_SMURF_DATA_START = 'DELETE_SMURF_DATA_START'
export const DELETE_SMURF_DATA_SUCCESS = 'DELETE_SMURF_DATA_SUCCESS'
export const DELETE_SMURF_DATA_FAILURE =  'DELETE_SMURF_DATA_FAILURE'

// export const SEND_SMURF_DATA_START = 'SEND_SMURF_DATA_START'
// export const SEND_SMURF_DATA_SUCCESS = 'SEND_SMURF_DATA_SUCCESS'
// export const SEND_SMURF_DATA_FAILURE = 'SEND_SMURF_DATA_FAILURE'

export const getData = () => dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START});
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        console.log(response.data)
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: FETCH_SMURF_DATA_FAILURE, payload: error.response})
    })
}

export const deleteData = id => dispatch => {
    dispatch({ type: DELETE_SMURF_DATA_START});
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
        console.log(response)
        dispatch({ type: DELETE_SMURF_DATA_SUCCESS})
    })
    .catch(error => {
        console.log(error.response)
        dispatch({type: DELETE_SMURF_DATA_FAILURE, payload: error.response})
    })
}

// export const sendData = (values) => dispatch => {
//     dispatch({type: SEND_SMURF_DATA_START})
//     axios.post('http://localhost:3333/smurfs', values)
//     .then(res => {
//         console.log(res.data)
//         dispatch({type: SEND_SMURF_DATA_SUCCESS})})
//     .catch(err => {
//         console.log(err)
//     dispatch({type: SEND_SMURF_DATA_FAILURE, payload: err.response})})
// }