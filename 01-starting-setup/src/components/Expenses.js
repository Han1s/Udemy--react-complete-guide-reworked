import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const expenses = (props) => {
  const expenses = props.expenses;

  return (
    <div className='expenses'>
      {
        expenses.map((expense, index) => {
          return (
            <ExpenseItem
              key={index} 
              title={expense.title}
              amount={expense.amount}
              date={expense.date} />
          )
        })
      }
    </div>
  )
}

export default expenses;