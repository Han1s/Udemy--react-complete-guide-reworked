import { useReducer } from "react"

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value,isTouched: state.isTouched };
  }

  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }

  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
};

const initialInputState = {
  value: '',
  isTouched: false,
};

const useMyOwnInput = (validate) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validate(inputState.value);
  const valueHasError = !valueIsValid && inputState.isTouched;

  const changeHandler = (event) => {
    dispatch({
      type: 'INPUT',
      value: event.target.value
    });
  }

  const blurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  }

  const reset = () => {
    dispatch( {type: 'RESET'} );
  }

  return {
    value: inputState.value,
    isTouched: inputState.touched,
    valueIsValid,
    valueHasError,
    changeHandler,
    blurHandler,
    reset
  }
}

export default useMyOwnInput;