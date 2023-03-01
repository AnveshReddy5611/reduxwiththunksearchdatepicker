import axios from 'axios'; // Import the Axios library.
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    INCREMENT,
    DECREMENT,
  } from './constants/index';
 // Define an action type for when the API call fails.

export const  fetchUsers = () => { // Define an action creator function that returns a thunk.
  return async (dispatch) => { // The thunk function takes the dispatch function as an argument.
    dispatch({ type: FETCH_USERS_REQUEST }); // Dispatch the FETCH_USERS_REQUEST action to indicate that the API call is starting.

    try { // Try to make the API call with Axios.
      const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Make the API call and store the response data.
      dispatch({ // Dispatch the FETCH_USERS_SUCCESS action with the response data as the payload.
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) { // If the API call fails, dispatch the FETCH_USERS_FAILURE action with the error message as the payload.
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error.message,
      });     
    }
  };
};

export const increment = (num) => {
  return {
      type: 'INCREMENT',
      payload: num
     // dispatch({type:INCREMENT});
   }
}
export const decrement = () => {
  return {
      type: 'DECREMENT'
  }
}
