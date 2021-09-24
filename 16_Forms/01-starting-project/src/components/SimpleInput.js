import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameChangeHandler = event => {
    setName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

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

  const nameInputClasses = nameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' onChange={nameChangeHandler} value={name} />
        {!nameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
