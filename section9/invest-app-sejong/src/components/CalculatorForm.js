import { useState } from "react";
import style from './calculatorForm.module.css';

const CalculatorForm = (props) => {
  const [currentSavigns, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const changeCurrentSaving = (event) => {
    setCurrentSavings(event.target.value);
  };
  const changeYearlyContribution = (event) => {
    setYearlyContribution(event.target.value);
  };
  const changeExpectedReturn = (event) => {
    setExpectedReturn(event.target.value);
  };
  const changeDuration = (event) => {
    setDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      currentSavings: currentSavigns,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };
    props.getUserInput(userInput);

    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={style.form}>
        <div className={style['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              onChange={changeCurrentSaving}
              value={currentSavigns}
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              onChange={changeYearlyContribution}
              value={yearlyContribution}
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={style['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              onChange={changeExpectedReturn}
              value={expectedReturn}
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              onChange={changeDuration}
              value={duration}
              id="duration"
            />
          </p>
        </div>
        <p className={style.actions}>
          <button type="reset" className={style.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={style.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default CalculatorForm;
