import style from './investmentTable.module.css';

const InvestmentTable = (props) => {
  const yearlyData = []; // per-year results
  let currentSavings = +props.userInput["currentSavings"]; // feel free to change the shape of this input object!
  const yearlyContribution = +props.userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
  const expectedReturn = +props.userInput["expectedReturn"] / 100;
  const duration = +props.userInput["duration"];
  let totalInterest = 0;
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = Math.floor(currentSavings * expectedReturn);
    currentSavings += yearlyInterest + yearlyContribution;
    totalInterest += yearlyInterest;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
      totalInterest: totalInterest,
    });
  }
  
  return (
    <div>
      <table className={style.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((item) => {
            return (
              <tr>
                <td>{item.year}</td>
                <td>$ {item.savingsEndOfYear}</td>
                <td>$ {item.yearlyInterest}</td>
                <td>$ {item.totalInterest}</td>
                <td>$ {item.savingsEndOfYear - item.totalInterest}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
