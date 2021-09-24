import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState('');

  const nameChangeHandler = event => {
    setName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    console.log(name);
    const enteredValue = nameRef.current.value;
    console.log(enteredValue);

    nameRef.current.value = '';
    setName('');
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' onChange={nameChangeHandler} value={name} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
