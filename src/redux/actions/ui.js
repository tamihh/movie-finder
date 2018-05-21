export const INPUT_FOCUS = 'input_state';

export function setInputState(value) {
  return dispatch => dispatch(inputFocus(value));
}

export const inputFocus = (value) => ({
  type: INPUT_FOCUS,
  payload: value
});
