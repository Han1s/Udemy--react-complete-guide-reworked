import useMyOwnInput from "../hooks/use-my-own-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    valueIsValid: firstNameIsValid,
    valueHasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useMyOwnInput((firstName) => firstName.trim() !== '');

  const {
    value: lastName,
    valueIsValid: lastNameIsValid,
    valueHasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useMyOwnInput((lastName) => lastName.trim() !== '');

  const {
    value: email,
    valueHasError: emailHasError,
    valueIsValid: emailIsValid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useMyOwnInput((email) => email.includes('@'));

  const formIsValid = (firstNameIsValid && lastNameIsValid && emailIsValid);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      console.log(`${firstName} ${lastName} ${email}`)
      resetFirstName();
      resetLastName();
      resetEmail();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameHasError ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='name'>First Name</label>
          <input 
            value={firstName} 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type='text' 
            id='name' />
          {firstNameHasError && <p className="error-text">First Name must not be empty.</p>}
        </div>
        <div className={lastNameHasError ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='lastName'>Last Name</label>
          <input 
            type='text' 
            id='lastName'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName} />
          {lastNameHasError && <p className="error-text">Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailHasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='email' 
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">Email must be valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
