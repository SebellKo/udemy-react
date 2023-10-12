import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import Header from "./components/Header";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [userInput, setUserInput] = useState({});

  const getUserInput = (userInput) => {
    setUserInput(userInput);
  }

  return (
    <div>
      <Header></Header>
      <CalculatorForm getUserInput={getUserInput} ></CalculatorForm>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentTable userInput={userInput} ></InvestmentTable>
    </div>
  );
}

export default App;
