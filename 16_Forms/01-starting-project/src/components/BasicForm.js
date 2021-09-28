import useMyOwnInput from "../hooks/use-my-own-input";

const BasicForm = (props) => {
  const {
    value: firstname,
    touched: firstNameTouched,
    valueIsValid: firstNameIsValid,
    valueHasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler
  } = useMyOwnInput((firstName) => firstName.trim() !== '');

  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
