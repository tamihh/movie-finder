import { INPUT_FOCUS } from 'Redux/actions/ui';

const initialState = {
  inputFocus: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_FOCUS:
      return {
        ...state,
        inputFocus: action.payload
      };
    default:
      return state;
  }
}
