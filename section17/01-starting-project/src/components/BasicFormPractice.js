import useInput from '../hooks/use-input-practice';

const BasicFormPractice = (props) => {
  const checkIsStr = (value) => {
    const check = /^[0-9]+$/;
    return !check.test(value);
  };

  const {
    inputValue: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameIsError,
    changeHandler: firstNameChageHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameRest,
  } = useInput(checkIsStr);

  const {
    inputValue: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameIsError,
    changeHandler: lastNameChageHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameRest,
  } = useInput(checkIsStr);

  const {
    inputValue: email,
    isValid: emailIsValid,
    hasError: emailIsError,
    changeHandler: emailChageHandler,
    blurHandler: emailBlurHandler,
    reset: emailRest,
  } = useInput((value) => value.includes('@'));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;
  console.log(formIsValid);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    firstNameRest();
    lastNameRest();
    emailRest();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div
          className={firstNameIsError ? 'form-control invalid' : 'form-control'}
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChageHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameIsError && <p>Plase enter invalid FirstName</p>}
        </div>
        <div
          className={lastNameIsError ? 'form-control invalid' : 'form-control'}
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChageHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameIsError && <p>Plase enter invalid LastName</p>}
        </div>
      </div>
      <div className={emailIsError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChageHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailIsError && <p>Plase enter invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicFormPractice;
