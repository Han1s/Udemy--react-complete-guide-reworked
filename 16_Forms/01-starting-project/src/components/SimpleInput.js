import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const nameChangeHandler = event => {
    setName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setNameTouched(true);

    if (!name.trim()) {
      setNameIsValid(false)
      return;
    } 

    setNameIsValid(true);

    console.log(name);
    const enteredValue = nameRef.current.value;
    console.log(enteredValue);

    nameRef.current.value = '';
    setName('');
  }

  const nameBlurHandler = () => {
    setNameTouched(true);
    if (!name.trim()) {
      setNameIsValid(false)
      return;
    } 
  }


  const nameInputIsInvalid = !nameIsValid && nameTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameRef} 
          type='text' 
          id='name' 
          onChange={nameChangeHandler} 
          value={name}
          onBlur={nameBlurHandler} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
