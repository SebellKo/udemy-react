import React, { useState } from 'react';
import List from './components/List';
import UserInput from './components/UserInput';


function App() {
  const [userInputList, setUserInputList] = useState([]);

  const getUserInput = (userInput) => {
    console.log(userInput);
    setUserInputList((prevUserInputList) => {
      return [...prevUserInputList, userInput];
    });
  }
  return (
    <div className='components_wrapper'>
      <UserInput getUserInput={getUserInput}></UserInput>
      <List userInputList={userInputList}></List>
    </div>
  );
}

export default App;
