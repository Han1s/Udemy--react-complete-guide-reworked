import { useEffect, useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const  { 
    value: name, 
    isValid: nameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangedHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput((value) => {
    return value.trim() !== ''
  });

  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsValid = email.includes('@');

  const emailIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = nameIsValid && emailIsValid;

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!nameIsValid) {
      return;
    }

    console.log(name);
    resetName();
    setEmail('');
    setEmailTouched(false);
  }

  const emailBlurHandler = () => {
    setEmailTouched(true);
  }


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangedHandler} 
          value={name}
          onBlur={nameBlurHandler} />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangeHandler} 
          value={email}
          onBlur={emailBlurHandler} />
        {emailIsInvalid && <p className="error-text">Email must be valid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
