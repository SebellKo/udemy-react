import { useState } from "react";
import Modal from "./Modal";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const [userInput, setUserInput] = useState({});

  const sumbitHandler = (event) => {
    event.preventDefault();
    props.getUserInput(userInput);
    setUserInput({ userName: "", age: "" });
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };
  return (
    <div>
      <Modal title="An error occured!" message="Something wrong"></Modal>
      <div className={classes.form_wrapper}>
        <form onSubmit={sumbitHandler}>
          <label htmlFor="userNameInput">Username</label>
          <input
            onChange={(event) => {
              changeHandler("userName", event.target.value);
            }}
            value={userInput.userName}
            id="userNameInput"
            type="text"
          ></input>
          <label htmlFor="ageInput">Age (Years)</label>
          <input
            onChange={(event) => {
              changeHandler("age", event.target.value);
            }}
            value={userInput.age}
            id="ageInput"
            type="text"
          ></input>
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
