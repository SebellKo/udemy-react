import Expense from "./components/Expense";


function App() {
  const expense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 295.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 95.67,
      date: new Date(2021, 2, 28),
    },
    { id: "e3", title: "Dinner", amount: 2905.67, date: new Date(2021, 2, 28) },
    { id: "e4", title: "Lunch", amount: 2.67, date: new Date(2021, 2, 28) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense expense={expense[0]}></Expense>
    </div>
  );
}

export default App;
