import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const expenses = (props) => {
  const expenses = props.expenses;

  return (
    <Card className='expenses'>
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
    </Card>
  )
}

export default expenses;