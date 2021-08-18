import { Fragment, useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [year, setYear] = useState(2020);

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expensesContent = <p>No Expenses found.</p>;
  if (filteredExpenses.length) {
    expensesContent = (
      filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>
          )
        }
      )
    )
  }

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  }

  return (
    <Fragment>
      <Card className='expenses'>
        <ExpensesFilter 
          yearChangeHandler={yearChangeHandler}
          year={year}
        />
        {expensesContent}
      </Card>
    </Fragment>
  )
}

export default Expenses;