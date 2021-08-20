import { Fragment, useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </Fragment>
  )
}

export default Expenses;