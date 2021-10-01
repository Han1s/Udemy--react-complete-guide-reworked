import { useState } from "react"

const useMyOwnInput = (validate) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const valueIsValid = validate(value);
  const valueHasError = !valueIsValid && touched;

  const changeHandler = (event) => {
    setValue(event.target.value);
  }

  const blurHandler = () => {
    setTouched(true);
  }

  const reset = () => {
    setTouched(false);
    setValue('');
  }

  return {
    value,
    touched,
    valueIsValid,
    valueHasError,
    changeHandler,
    blurHandler,
    reset
  }
}

export default useMyOwnInput;