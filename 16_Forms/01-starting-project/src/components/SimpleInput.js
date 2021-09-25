import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim();
  const nameInputIsInvalid = !nameIsValid && nameTouched;

  let formIsValid = nameIsValid;

  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setNameTouched(true);

    if (!nameIsValid) {
      return;
    }

    console.log(name);
    setName('');
    setNameTouched(false);
  }

  const nameBlurHandler = () => {
    setNameTouched(true);
  }


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler} 
          value={name}
          onBlur={nameBlurHandler} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
