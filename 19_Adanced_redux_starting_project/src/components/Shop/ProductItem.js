import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const fixedPrice = price.toFixed(2);

  const addHandler = () => {
    const item = {
      title: title,
      price: fixedPrice
    }
    dispatch(cartActions.addItem(item))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${fixedPrice}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
