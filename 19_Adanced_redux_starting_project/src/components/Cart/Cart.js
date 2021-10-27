import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items = useSelector(state => state.items);

  console.log(items);

  const mappedItems = items.map((item) => (
    <CartItem item={{
      title: item.title,
      quantity: item.quantity,
      price: item.price, 
      total: item.total}}/>
  ))

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {mappedItems}
      </ul>
    </Card>
  );
};

export default Cart;
