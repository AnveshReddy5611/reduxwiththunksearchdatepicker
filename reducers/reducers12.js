import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
  } from '../constants/index'; // Import our action types.
  
  const initialState = { // Define our initial state.
    users: [],
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => { // Define our root reducer function.
    switch (action.type) { // Switch on the action type to determine how to update the state.
      case FETCH_USERS_REQUEST: // If the action is FETCH_USERS_REQUEST, update the state to indicate that the API call is starting.
        return {
          ...state, // Spread the existing state object.
          loading: true, // Set loading to true.
          error: null, // Clear any existing error message.
        };
      case FETCH_USERS_SUCCESS: // If the action is FETCH_USERS_SUCCESS, update the state with the response data and indicate that the API call is complete.
        return {
          ...state, // Spread the existing state object.
          users: action.payload, // Update the users array with the response data.
          loading: false, // Set loading to false.
        };
      case FETCH_USERS_FAILURE: // If the action is FETCH_USERS_FAILURE, update the state to indicate that the API call failed and store the error message.
      return {
      ...state, // Spread the existing state object.
      loading: false, // Set loading to false.
      error: action.payload, // Store the error message.
      };
      default: // If the action type is not recognized, return the existing state.
      return state;
      }
      };
      
      export default rootReducer; // Export the root reducer function.
  