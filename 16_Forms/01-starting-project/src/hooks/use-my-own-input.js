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

  return {
    value,
    touched,
    valueIsValid,
    valueHasError,
    changeHandler,
    blurHandler
  }
}

export default useMyOwnInput;