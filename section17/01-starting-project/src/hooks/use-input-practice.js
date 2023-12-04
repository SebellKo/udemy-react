import { useState } from 'react';

const useInput = (validateFunc) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateFunc(inputValue);
  const hasError = !valueIsValid && isTouched;

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue('');
    setIsTouched(false);
  };

  return {
    inputValue,
    isValid: valueIsValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
