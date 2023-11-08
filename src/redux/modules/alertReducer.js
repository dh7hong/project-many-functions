const SHOW_ALERT = 'SHOW_ALERT';
const SET_USER_INPUT = 'SET_USER_INPUT';

export const showAlert = (message) => ({
  type: SHOW_ALERT,
  payload: message
});

export const setUserInput = (input) => ({
  type: SET_USER_INPUT,
  payload: input
});


const initialState = {
  alertMessage: '',
  userInput: ''
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alertMessage: action.payload
      };
    case SET_USER_INPUT:
      return {
        ...state,
        userInput: action.payload
      };
    default:
      return state;
  }
};

export default alertReducer;