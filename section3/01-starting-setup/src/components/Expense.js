import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
    console.log(props);
  return (
    <Card className="expense">
      <ExpenseItem expense={props.expense}></ExpenseItem>
    </Card>
  );
}


export default Expense;