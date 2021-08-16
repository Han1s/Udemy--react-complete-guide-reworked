import { Fragment, useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [year, setYear] = useState(2020);

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  }

  return (
    <Fragment>
      <Card className='expenses'>\
        <ExpensesFilter 
          yearChangeHandler={yearChangeHandler}
          year={year}
        />
        {
          props.expenses.map((expense, index) => {
            return (
              <ExpenseItem
                key={index} 
                title={expense.title}
                amount={expense.amount}
                date={expense.date} 
              />
            )
          })
        }
      </Card>
    </Fragment>
  )
}

export default Expenses;